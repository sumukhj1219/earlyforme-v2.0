import type React from "react";
import Template1 from "~/components/template/template1";
import type { Template } from "~/types/template";

export const templateMap:Record<number, React.FC<Template>> = {
    1: Template1
}