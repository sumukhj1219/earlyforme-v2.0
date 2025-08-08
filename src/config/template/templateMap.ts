import type React from "react";
import Template1 from "~/components/template/template1";
import Template2 from "~/components/template/template2";
import Template3 from "~/components/template/template3";
import type { Template } from "~/types/template";

export const templateMap:Record<number, React.FC<Template>> = {
    1: Template1,
    2: Template2,
    3: Template3
}