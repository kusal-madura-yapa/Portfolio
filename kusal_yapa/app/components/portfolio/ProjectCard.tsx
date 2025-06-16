"use client";
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import CircleIcon from "@mui/icons-material/Circle";
import { ProjectCardProps, ProcessedDescription } from "../../types";
import { cardBaseStyle, cardHoverEffect, gradientText } from "../../styles/commonStyles";
import { useTheme } from "@mui/material/styles";

export function ProjectCard({ title, description, date, sx }: ProjectCardProps) {
  const theme = useTheme();
  
  /**
   * Processes the description text to determine if it should be rendered as a paragraph or a list
   * @param desc The description text to process
   * @returns An object with the processed description data
   */
  const processDescription = (desc?: string): ProcessedDescription => {
    if (!desc) return { isParagraph: true, content: "" };

    const lines = desc.split("\n").filter((line) => line.trim());
    if (lines.length === 1 || !lines.some((line) => line.includes("\n") || line.startsWith("-"))) {
      // Treat as a single paragraph if no newlines or list markers
      return { isParagraph: true, content: desc };
    }

    // Treat as structured list with header and items
    const header = lines[0];
    const items = lines.slice(1).map((line) => line.trim().replace(/^-/, "").trim());
    return { isParagraph: false, header, items };
  };

  const processed = processDescription(description);

  return (
    <Card
      sx={{
        ...cardBaseStyle(theme),
        ...cardHoverEffect(theme),
        ...sx,
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        {title && (
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              ...gradientText(theme),
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        )}

        {processed.isParagraph ? (
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              lineHeight: 1.6,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            {processed.content}
          </Typography>
        ) : (
          <Box>
            {processed.header && (
              <Typography
                variant="subtitle1"
                sx={{
                  color: "text.primary",
                  fontWeight: "medium",
                  mb: 1,
                }}
              >
                {processed.header}
              </Typography>
            )}
            {processed.items && processed.items.length > 0 && (
              <List dense sx={{ pl: 1 }}>
                {processed.items.map((item, idx) => (
                  <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: "24px" }}>
                      <CircleIcon sx={{ fontSize: "8px", color: "#bb86fc" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.primary",
                            fontSize: { xs: "0.85rem", sm: "0.9rem" },
                          }}
                        >
                          {item}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        )}

        {date && (
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              display: "block",
              mt: 1,
              fontSize: { xs: "0.75rem", sm: "0.8rem" },
            }}
          >
            {date}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}