import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string =>
  name
    .split(" ") // Split the name into words
    .map((part) => part[0]) // Get the first character of each word
    .join("") // Join the characters into a single string
    .toUpperCase() // Convert the string to uppercase
    .slice(0, 2); // Take the first two characters
