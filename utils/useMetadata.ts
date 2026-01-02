import { Metadata } from "next";

interface ppage{
    title: string,
    description: string
}

export function generateMetadata({title, description}:ppage):Metadata {
    return {
        title: `${title} - Animatex Pro`,
        description: description
    }

}