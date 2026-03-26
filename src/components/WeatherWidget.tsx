"use client";

import { useState, useEffect, useCallback } from "react";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, Droplets, Wind, X, Sunrise, Sunset, CloudRainWind } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface WeatherData {
  temperature: number;
  weathercode: number;
  windspeed: number;
  humidity: number;
}

interface HourlyForecast {
  time: string;
  temperature: number;
  weathercode: number;
  precipitationProbability: number;
}

interface DayForecast {
  label: string;
  hours: HourlyForecast[];
}

interface ExtendedWeatherData extends WeatherData {
  days: DayForecast[];
  sunrise: string;
  sunset: string;
  currentRainChance: number;
}

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=47.88&longitude=7.73&current=temperature_2m,weathercode,windspeed_10m,relative_humidity_2m&hourly=temperature_2m,weathercode,precipitation_probability&daily=sunrise,sunset&timezone=Europe/Berlin&forecast_days=3";

const getWeatherIcon = (code: number, size = 20) => {
  if (code === 0 || code === 1) return <Sun size={size} className="text-yellow-400" />;
  if (code === 2 || code === 3) return <Cloud size={size} className="text-muted-foreground" />;
  if (code >= 51 && code <= 55) return <CloudDrizzle size={size} className="text-blue-400" />;
  if (code >= 61 && code <= 67) return <CloudRain size={size} className="text-blue-500" />;
  if (code >= 71 && code <= 77) return <CloudSnow size={size} className="text-sky-300" />;
  if (code >= 80 && code <= 82) return <CloudRain size={size} className="text-blue-500" />;
  if (code >= 95) return <CloudLightning size={size} className="text-yellow-500" />;
  if (code >= 45 && code <= 48) return <Cloud size={size} className="text-muted-foreground" />;
  return <Sun size={size} className="text-yellow-400" />;
};

const getWeatherLabel = (code: number, labels: Record<string, string>) => {
  if (code === 0) return labels.clear;
  if (code === 1 || code === 2) return labels.partlyCloudy;
  if (code === 3) return labels.cloudy;
  if (code >= 45 && code <= 48) return labels.fog;
  if (code >= 51 && code <= 55) return labels.drizzle;
  if (code >= 61 && code <= 67) return labels.rain;
  if (code >= 71 && code <= 77) return labels.snow;
  if (code >= 80 && code <= 82) return labels.showers;
  if (code >= 95) return labels.thunderstorm;
  return labels.clear;
};

const formatTime = (iso: string) => {
  const d = new Date(iso);
  return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
};

const formatHour = (iso: string) => {
  const d = new Date(iso);
  return `${d.getHours().toString().padStart(2, "0")}`;
};

const WeatherWidget = () => {
  const [data, setData] = useState<ExtendedWeatherData | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  const fetchWeather = useCallback(async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();

      const now = new Date();
      const currentHourIndex = now.getHours();
      const w = t.weather;
      const dayLabels = [w.today, w.tomorrow, w.dayAfterTomorrow];

      const days: DayForecast[] = [];
      for (let d = 0; d < 3; d++) {
        const hours: HourlyForecast[] = [];
        const baseIndex = d * 24;
        for (let h = 6; h <= 18; h++) {
          const idx = baseIndex + h;
          if (idx < json.hourly.time.length) {
            hours.push({
              time: json.hourly.time[idx],
              temperature: json.hourly.temperature_2m[idx],
              weathercode: json.hourly.weathercode[idx],
              precipitationProbability: json.hourly.precipitation_probability[idx],
            });
          }
        }
        days.push({ label: dayLabels[d], hours });
      }

      setData({
        temperature: json.current.temperature_2m,
        weathercode: json.current.weathercode,
        windspeed: json.current.windspeed_10m,
        humidity: json.current.relative_humidity_2m,
        days,
        sunrise: json.daily.sunrise[0],
        sunset: json.daily.sunset[0],
        currentRainChance: json.hourly.precipitation_probability[currentHourIndex] ?? 0,
      });
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, [t.weather]);

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchWeather]);

  if (loading || !data) {
    return (
      <button className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-card border border-border shadow-lg px-3 py-2 text-sm animate-pulse">
        <Cloud size={18} className="text-muted-foreground" />
        <span className="text-muted-foreground">--°C</span>
      </button>
    );
  }

  const w = t.weather;

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-card border border-border shadow-lg px-3 py-2 text-sm hover:shadow-xl transition-shadow cursor-pointer"
        aria-label={w.title}
      >
        {getWeatherIcon(data.weathercode, 18)}
        <span className="font-semibold text-foreground">{Math.round(data.temperature)}°C</span>
      </button>

      {open && (
        <div className="fixed bottom-16 left-4 z-50 w-80 max-h-[70vh] overflow-y-auto rounded-xl bg-card border border-border shadow-2xl p-4 animate-in fade-in-0 slide-in-from-bottom-2">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-foreground text-sm">{w.title}</h3>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground cursor-pointer">
              <X size={16} />
            </button>
          </div>

          {/* Current */}
          <div className="flex items-center gap-3 mb-4">
            {getWeatherIcon(data.weathercode, 36)}
            <div>
              <p className="text-2xl font-bold text-foreground">{Math.round(data.temperature)}°C</p>
              <p className="text-xs text-muted-foreground">{getWeatherLabel(data.weathercode, w.conditions)}</p>
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-3 text-xs mb-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Wind size={14} />
              <div>
                <p className="text-foreground font-medium">{data.windspeed} km/h</p>
                <p>{w.wind}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Droplets size={14} />
              <div>
                <p className="text-foreground font-medium">{data.humidity}%</p>
                <p>{w.humidity}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CloudRainWind size={14} />
              <div>
                <p className="text-foreground font-medium">{data.currentRainChance}%</p>
                <p>{w.rainChance}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sunrise size={14} />
              <div>
                <p className="text-foreground font-medium">{formatTime(data.sunrise)}</p>
                <p>{w.sunrise}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground col-span-2">
              <Sunset size={14} />
              <div>
                <p className="text-foreground font-medium">{formatTime(data.sunset)}</p>
                <p>{w.sunset}</p>
              </div>
            </div>
          </div>

          {/* 3-Day Forecast */}
          {data.days.map((day, dayIdx) => (
            <div key={dayIdx} className="border-t border-border pt-3 mt-3">
              <p className="text-xs font-semibold text-foreground mb-2">{day.label}</p>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {day.hours.map((h) => (
                  <div key={h.time} className="flex flex-col items-center gap-1 min-w-[36px]">
                    <span className="text-[10px] text-muted-foreground">{formatHour(h.time)}</span>
                    {getWeatherIcon(h.weathercode, 14)}
                    <span className="text-[10px] font-medium text-foreground">{Math.round(h.temperature)}°</span>
                    <span className="text-[9px] text-blue-400">{h.precipitationProbability}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="text-[10px] text-muted-foreground mt-3 pt-2 border-t border-border">
            📍 Staufen im Breisgau · Open-Meteo
          </p>
        </div>
      )}
    </>
  );
};

export default WeatherWidget;
