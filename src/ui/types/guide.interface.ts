export interface Guide {
  page: string;
  tooltips: TooltipItem[];
}

export interface TooltipItem {
  id: string;
  title?: string;
  content?: string;
  action: "next" | "finish";
}
