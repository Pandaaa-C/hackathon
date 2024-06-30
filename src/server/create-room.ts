"use server";

import { env } from "@/env";
import { readdir } from "fs";

export async function getServerRoomTemplates() {
  return await getFiles(env.FILE_ROOT_DIRECTORY);
}

async function getFiles(directory: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    readdir(directory, (error, files) => {
      if (error) reject(false);
      resolve(files)
    });
  })
}