import swaggerJSDoc from "swagger-jsdoc";
import { version } from "@packageJSON";

export const swaggerConfig: swaggerJSDoc.OAS3Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Game Report API",
      version,
      description: "A simple API to get Quake game reports",
    },
    host: `${process.env.SERVER_BASE_URL}:${process.env.SERVER_PORT}`,
    tags: [],
    components: {
      schemas: {
        GameReportResponse: {
          type: "object",
          properties: {
            status: {
              type: "string",
              description: "Status of the response",
              example: "Success",
            },
            message: {
              type: "string",
              description: "Message of the response",
              example: "Game report successfully retrieved",
            },
            report: {
              type: "object",
              properties: {
                "game_\\d+$": {
                  type: "object",
                  properties: {
                    total_kills: {
                      type: "number",
                      description: "Total kills of the match",
                    },
                    players: {
                      type: "array",
                      items: {
                        type: "string",
                      },
                    },
                    kills: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          dynamic_username: {
                            type: "number",
                            prop_regex_pattern: "^(w+s?)+$",
                            description: "Player score",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ["src/controllers/*.ts"],
};
