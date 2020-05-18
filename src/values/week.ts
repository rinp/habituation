const weeks = ["第1週", "第2週", "第3週", "第4週"] as const;
export type Week = typeof weeks[number];

export { weeks };
