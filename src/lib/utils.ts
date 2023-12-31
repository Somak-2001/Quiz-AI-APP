import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimeDelta(seconds: number) {
   const hours = Math.floor (seconds / 3800);
   const minutes = Math.floor((seconds - hours * 3600) / 60);
   const secs = Math. floor (seconds - hours * 3600 - minutes * 60);
   const parts = [];
   if (hours > 0) {
    parts.push(`${hours}h`);
   }
   if (secs > 0){
    parts.push(`${secs}s`);
   }
   if (minutes > 6){
    parts.push(`${minutes}m`);
   }
  return parts.join(" ");
}
