"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "../../lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx)
    throw new Error("useChart must be used within a <ChartContainer />");
  return ctx;
}

type ChartContainerProps = React.ComponentProps<"div"> & {
  id?: string;
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
};

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: ChartContainerProps) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          [
            // shadcn-style selectors
            "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
            "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50",
            "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border",
            "[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border",
            "[&_.recharts-radial-bar-background-sector]:fill-muted",
            "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted",
            "[&_.recharts-reference-line_[stroke='#ccc']]:stroke-border",
            "[&_.recharts-dot[stroke='#fff']]:stroke-transparent",
            "[&_.recharts-layer]:outline-hidden",
            "[&_.recharts-sector]:outline-hidden",
            "[&_.recharts-sector[stroke='#fff']]:stroke-transparent",
            "[&_.recharts-surface]:outline-hidden",
            "flex aspect-video justify-center text-xs",
          ].join(" "),
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const colorConfig = Object.entries(config).filter(
    ([, item]) => item.theme || item.color
  );

  if (!colorConfig.length) return null;

  const css = Object.entries(THEMES)
    .map(([theme, prefix]) => {
      const vars = colorConfig
        .map(([key, itemConfig]) => {
          const color =
            itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
            itemConfig.color;
          return color ? `  --color-${key}: ${color};` : null;
        })
        .filter(Boolean)
        .join("\n");

      return `
${prefix} [data-chart=${id}] {
${vars}
}
`;
    })
    .join("\n");

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartLegend = RechartsPrimitive.Legend;

// ---- Safe “shape” types (Recharts varies a lot between chart types) ----

type TooltipPayloadItem = {
  name?: unknown;
  dataKey?: unknown;
  value?: unknown;
  color?: string;
  payload?: Record<string, any>;
};

type ChartTooltipContentProps = React.HTMLAttributes<HTMLDivElement> & {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: unknown;
  labelFormatter?: (
    label: any,
    payload: TooltipPayloadItem[]
  ) => React.ReactNode;
  formatter?: (
    value: any,
    name: any,
    item: TooltipPayloadItem,
    index: number,
    payload: any
  ) => React.ReactNode;
  labelClassName?: string;
  color?: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;
};

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
  ...divProps
}: ChartTooltipContentProps) {
  const { config } = useChart();

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) return null;

    const item = payload[0];
    const derivedKey = `${labelKey || item?.dataKey || item?.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, derivedKey);

    const value =
      !labelKey && typeof label === "string"
        ? config[label]?.label ?? label
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) return null;
    return <div className={cn("font-medium", labelClassName)}>{value}</div>;
  }, [
    hideLabel,
    payload,
    labelKey,
    config,
    label,
    labelFormatter,
    labelClassName,
  ]);

  if (!active || !payload?.length) return null;

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
      {...divProps}
    >
      {!nestLabel ? tooltipLabel : null}

      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          const indicatorColor =
            color || item.payload?.fill || item.payload?.stroke || item.color;

          const displayName = itemConfig?.label ?? item.name ?? item.dataKey;

          return (
            <div
              key={`${String(item.dataKey ?? item.name ?? index)}-${index}`}
              className={cn(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center"
              )}
            >
              {formatter && item.value !== undefined ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0 rounded-[2px] border-[color:var(--color-border)] bg-[color:var(--color-bg)]",
                          {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          }
                        )}
                        style={
                          {
                            ["--color-bg" as any]: indicatorColor,
                            ["--color-border" as any]: indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}

                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {String(displayName ?? "")}
                      </span>
                    </div>

                    {item.value !== undefined && item.value !== null && (
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {typeof item.value === "number"
                          ? item.value.toLocaleString()
                          : String(item.value)}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

type LegendPayloadItem = {
  value?: unknown;
  dataKey?: unknown;
  color?: string;
};

type ChartLegendContentProps = React.HTMLAttributes<HTMLDivElement> & {
  hideIcon?: boolean;
  nameKey?: string;
  payload?: LegendPayloadItem[];
  verticalAlign?: "top" | "bottom" | "middle";
};

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
  ...divProps
}: ChartLegendContentProps) {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
      {...divProps}
    >
      {payload.map((item, idx) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={`${String(item.value ?? idx)}-${idx}`}
            className={cn(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) return undefined;

  const p = payload as Record<string, any>;
  const nested =
    typeof p.payload === "object" && p.payload ? p.payload : undefined;

  let configLabelKey = key;

  if (typeof p[key] === "string") {
    configLabelKey = p[key];
  } else if (nested && typeof nested[key] === "string") {
    configLabelKey = nested[key];
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
