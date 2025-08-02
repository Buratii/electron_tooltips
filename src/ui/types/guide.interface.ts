export interface Guide {
  page: string;
  tooltips: TooltipItem[];
}

export interface TooltipItem {
  id: string;
  content: string;
  action: "next" | "finish";
}
