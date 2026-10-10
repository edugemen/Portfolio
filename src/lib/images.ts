import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/**/*.{png,jpg,webp}",
    { eager: true },
);

export function getImage(name: string): ImageMetadata {
    const image = images[`/src/assets/${name.replace(/^\//, "")}`];
    if (!image) throw new Error(`Imagen no encontrada en src/assets: ${name}`);
    return image.default;
}
