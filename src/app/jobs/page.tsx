"use client";

import { useState, useCallback, useRef, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Send, TreePine, Upload, X, Clock, Users, Heart, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Link from "next/link";
import preiseHeroBg from "@/assets/preise-hero-bg.jpg";

const WavyBottom = ({ fill }: { fill: string }) => (
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 120" className="w-full h-auto">
      <path
        d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  </div>
);

interface JobListing {
  id: string;
  title: string;
  type: string;
  description: string;
  tasks: string[];
  requirements: string[];
}

const jobListings: JobListing[] = [
  {
    id: "klettertrainer",
    title: "Klettertrainer (m/w/d)",
    type: "Teilzeit / Minijob",
    description: "Du sicherst unsere Gäste in den Baumwipfeln, weist sie in die Parcours ein und sorgst dafür, dass jeder sicher und mit einem Lächeln wieder unten ankommt.",
    tasks: [
      "Einweisung der Gäste in die Sicherungstechnik",
      "Betreuung und Überwachung der Parcours",
      "Rettung und Hilfestellung bei Bedarf",
      "Pflege und Kontrolle der Ausrüstung",
    ],
    requirements: [
      "Sportlich und schwindelfrei",
      "Freude am Umgang mit Menschen",
      "Zuverlässigkeit und Verantwortungsbewusstsein",
      "Mindestalter 18 Jahre",
    ],
  },
  {
    id: "kassenkraft",
    title: "Kassenkraft (m/w/d)",
    type: "Minijob",
    description: "Du bist das erste Gesicht, das unsere Gäste sehen. An der Kasse sorgst du für einen reibungslosen Ablauf und beantwortest Fragen rund um den Kletterwald.",
    tasks: [
      "Ticketverkauf und Kassenabrechnung",
      "Begrüßung und Beratung der Gäste",
      "Telefon- und E-Mail-Anfragen beantworten",
      "Unterstützung bei der Organisation vor Ort",
    ],
    requirements: [
      "Freundliches und offenes Auftreten",
      "Erfahrung im Umgang mit Kassen von Vorteil",
      "Gute Deutschkenntnisse",
      "Flexibilität an Wochenenden und Feiertagen",
    ],
  },
  {
    id: "marketing",
    title: "Marketing (m/w/d)",
    type: "Teilzeit",
    description: "Du bringst den Kletterwald in die digitale Welt – mit kreativen Social-Media-Beiträgen, Event-Ideen und Kooperationen in der Region.",
    tasks: [
      "Social-Media-Kanäle betreuen (Instagram, Facebook)",
      "Content erstellen: Fotos, Videos, Texte",
      "Events und Aktionen planen und bewerben",
      "Kooperationen mit lokalen Partnern aufbauen",
    ],
    requirements: [
      "Erfahrung im Social-Media-Marketing",
      "Kreativität und Eigeninitiative",
      "Sicherer Umgang mit gängigen Tools (Canva, etc.)",
      "Affinität zu Outdoor-Themen",
    ],
  },
  {
    id: "praktikum",
    title: "Praktikum (m/w/d)",
    type: "Vollzeit / Teilzeit",
    description: "Du möchtest in alle Bereiche eines Freizeitbetriebs reinschnuppern? Bei uns bekommst du Einblicke in Betrieb, Marketing, Gästebetreuung und mehr.",
    tasks: [
      "Einblick in den täglichen Betriebsablauf",
      "Unterstützung der Trainer und des Kassenteams",
      "Mitarbeit bei Marketing-Projekten",
      "Eigene kleine Projekte übernehmen",
    ],
    requirements: [
      "Interesse an Outdoor-Aktivitäten",
      "Teamfähigkeit und Lernbereitschaft",
      "Mindestens 4 Wochen Praktikumsdauer",
      "Pflichtpraktikum oder freiwillig",
    ],
  },
];

const MAX_FILE_SIZE = 10 * 1024 * 1024;

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `Was ist ${a} + ${b}?`, answer: a + b };
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// --- Bewerbungs-Dialog ---

function BewerbungsDialog({ job, open, onOpenChange }: { job: JobListing; open: boolean; onOpenChange: (v: boolean) => void }) {
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formSchema = useMemo(() => z.object({
    vorname: z.string().trim().min(2, "Mindestens 2 Zeichen").max(50, "Maximal 50 Zeichen"),
    nachname: z.string().trim().min(2, "Mindestens 2 Zeichen").max(50, "Maximal 50 Zeichen"),
    email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse ein").max(255),
    telefon: z.string().trim().max(30, "Maximal 30 Zeichen").optional().or(z.literal("")),
    motivation: z.string().trim().min(10, "Mindestens 10 Zeichen").max(1000, "Maximal 1000 Zeichen"),
    captchaAnswer: z.string().min(1, "Bitte löse die Rechenaufgabe").refine(
      (val) => parseInt(val, 10) === captcha.answer,
      "Falsche Antwort, bitte versuche es erneut"
    ),
    datenschutz: z.literal(true, { errorMap: () => ({ message: "Du musst die Datenschutzerklärung akzeptieren" }) }),
  }), [captcha.answer]);

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vorname: "", nachname: "", email: "", telefon: "",
      motivation: "", captchaAnswer: "", datenschutz: undefined as unknown as true,
    },
  });

  const totalFileSize = useMemo(() => files.reduce((sum, f) => sum + f.size, 0), [files]);

  const addFiles = useCallback((newFiles: FileList | null) => {
    if (!newFiles) return;
    const incoming = Array.from(newFiles);
    setFiles(prev => {
      const currentSize = prev.reduce((s, f) => s + f.size, 0);
      const added: File[] = [];
      let runningSize = currentSize;
      for (const file of incoming) {
        if (runningSize + file.size <= MAX_FILE_SIZE) {
          added.push(file);
          runningSize += file.size;
        } else {
          toast.error(`"${file.name}" überschreitet das 10 MB Limit`);
        }
      }
      return [...prev, ...added];
    });
  }, []);

  const removeFile = useCallback((index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  }, []);

  const onSubmit = (data: FormValues) => {
    console.log("Bewerbung abgesendet:", { ...data, stelle: job.title }, "Dateien:", files);
    toast.success("Bewerbung gesendet!", {
      description: "Vielen Dank für dein Interesse. Wir melden uns so schnell wie möglich bei dir.",
    });
    form.reset();
    setFiles([]);
    setCaptcha(generateCaptcha());
    onOpenChange(false);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
  }, [addFiles]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Briefcase className="h-5 w-5 text-primary" />
            Bewerbung: {job.title}
          </DialogTitle>
          <DialogDescription>
            Fülle das Formular aus, um dich auf die Stelle als {job.title} zu bewerben.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField control={form.control} name="vorname" render={({ field }) => (
                <FormItem>
                  <FormLabel>Vorname</FormLabel>
                  <FormControl><Input placeholder="Max" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="nachname" render={({ field }) => (
                <FormItem>
                  <FormLabel>Nachname</FormLabel>
                  <FormControl><Input placeholder="Mustermann" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl><Input type="email" placeholder="deine@email.de" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="telefon" render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon (optional)</FormLabel>
                  <FormControl><Input type="tel" placeholder="+49 123 456789" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <FormField control={form.control} name="motivation" render={({ field }) => (
              <FormItem>
                <FormLabel>Kurze Motivation</FormLabel>
                <FormControl>
                  <Textarea placeholder="Erzähl uns kurz, warum du bei uns arbeiten möchtest …" rows={4} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            {/* Datei-Upload */}
            <div className="space-y-2">
              <FormLabel>Dateien hochladen (optional)</FormLabel>
              <div
                className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-5 text-center cursor-pointer hover:border-primary/50 transition-colors"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="h-7 w-7 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Dateien hierher ziehen oder <span className="text-primary font-medium">durchsuchen</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">Max. 10 MB gesamt</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => { addFiles(e.target.files); e.target.value = ""; }}
                />
              </div>
              {files.length > 0 && (
                <div className="space-y-2 mt-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{formatFileSize(totalFileSize)} / 10 MB</span>
                    <span>{files.length} {files.length === 1 ? "Datei" : "Dateien"}</span>
                  </div>
                  <Progress value={(totalFileSize / MAX_FILE_SIZE) * 100} className="h-2" />
                  <ul className="space-y-1">
                    {files.map((file, i) => (
                      <li key={`${file.name}-${i}`} className="flex items-center justify-between bg-muted/50 rounded px-3 py-1.5 text-sm">
                        <span className="truncate mr-2">{file.name} <span className="text-muted-foreground">({formatFileSize(file.size)})</span></span>
                        <button type="button" onClick={() => removeFile(i)} className="text-muted-foreground hover:text-destructive shrink-0">
                          <X className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Captcha */}
            <FormField control={form.control} name="captchaAnswer" render={({ field }) => (
              <FormItem>
                <FormLabel>Sicherheitsfrage: {captcha.question}</FormLabel>
                <FormControl><Input placeholder="Deine Antwort" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            {/* Datenschutz */}
            <FormField control={form.control} name="datenschutz" render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value === true} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    Ich habe die{" "}
                    <Link href="/datenschutz" className="text-primary underline hover:text-primary/80">
                      Datenschutzerklärung
                    </Link>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )} />

            <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold w-full sm:w-auto">
              <Send className="h-4 w-4 mr-2" />
              Bewerbung absenden
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// --- Haupt-Seite ---

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-24">
          <img src={preiseHeroBg.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 to-primary/60" />
          <WavyBottom fill="hsl(40 33% 96%)" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="inline-block bg-amber-light text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Jobs
            </span>
            <h1 className="text-4xl sm:text-5xl text-primary-foreground mb-4">
              Werde Teil unseres Teams!
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Du liebst die Natur und arbeitest gerne mit Menschen? Dann bewirb dich jetzt beim Kletterwald Staufen!
            </p>
          </div>
        </section>

        {/* Arbeiten im Kletterwald */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                Über uns
              </span>
              <h2 className="text-3xl text-foreground mb-6">Arbeiten im Kletterwald</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Seit 2010 ist der Kletterwald Staufen ein fester Bestandteil der Region – als größter Kletterpark in Südbaden
                begrüßen wir jährlich über 100.000 Besucher in unseren Baumwipfeln. Mit über 200 Kletter-Elementen bieten
                wir Abenteuer für jedes Alter.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                2026 starten wir mit einem neuen Partner und frischer Energie in die Zukunft – die perfekte Zeit,
                um Teil unseres Teams zu werden! Ob als Klettertrainer hoch oben in den Bäumen, an der Kasse
                mit direktem Gästekontakt oder im Marketing – bei uns erwartet dich ein familiäres Team,
                abwechslungsreiche Aufgaben und ein Arbeitsplatz mitten in der Natur.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl text-foreground text-center mb-8">Was wir bieten</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: TreePine, title: "Arbeit in der Natur", desc: "Dein Büro ist der Wald – frische Luft und Vogelgezwitscher inklusive." },
                  { icon: Clock, title: "Flexible Zeiten", desc: "Saisonale Arbeitszeiten, ideal für Studierende oder als Nebenjob." },
                  { icon: Heart, title: "Kostenlos klettern", desc: "Als Teammitglied kannst du unsere Parcours jederzeit kostenlos nutzen." },
                  { icon: Users, title: "Tolles Team", desc: "Ein motiviertes, junges Team, das zusammenhält und Spaß an der Arbeit hat." },
                ].map((benefit) => (
                  <Card key={benefit.title} className="text-center hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-3">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Offene Stellen */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                Stellenangebote
              </span>
              <h2 className="text-3xl text-foreground mb-3">Offene Stellen</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Finde die passende Stelle und bewirb dich direkt – wir freuen uns auf deine Nachricht!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {jobListings.map((job) => (
                <Card key={job.id} className="flex flex-col hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                      <Badge variant="secondary" className="shrink-0 text-xs">{job.type}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{job.description}</p>

                    <div className="mb-3">
                      <p className="text-sm font-semibold text-foreground mb-1.5">Deine Aufgaben</p>
                      <ul className="space-y-1">
                        {job.tasks.map((task) => (
                          <li key={task} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-primary" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-5">
                      <p className="text-sm font-semibold text-foreground mb-1.5">Was du mitbringst</p>
                      <ul className="space-y-1">
                        {job.requirements.map((req) => (
                          <li key={req} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-primary" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> Staufen im Breisgau
                      </span>
                      <Button
                        onClick={() => setSelectedJob(job)}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Jetzt bewerben
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="bg-primary/10 rounded-full p-3">
                <TreePine className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl text-foreground mb-4">Wir freuen uns auf dich!</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Bei Fragen zur Bewerbung erreichst du uns jederzeit über unsere Kontaktseite.
            </p>
          </div>
        </section>
      </main>
      <Footer />

      {/* Bewerbungs-Dialog */}
      {selectedJob && (
        <BewerbungsDialog
          job={selectedJob}
          open={!!selectedJob}
          onOpenChange={(open) => { if (!open) setSelectedJob(null); }}
        />
      )}
    </div>
  );
};

export default Jobs;
