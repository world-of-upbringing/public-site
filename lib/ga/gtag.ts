import { IGtagItem } from "../interfaces/IGtagItem";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  console.log(`In GTAG pageview for URL ${url}`);
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: string,
  category: string,
  label: string,
  value: number
) => {
  console.log(
    `In GTAG event with ${action}, ${category}, ${label} and ${value}`
  );
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const begin_checkout = (value: number, items: IGtagItem[]) => {
  console.log(`In GTAG begin checkout with ${value}, ${JSON.stringify(items)}`);
  window.gtag("event", "begin_checkout", {
    currency: "INR",
    value: value,
    items: items,
  });
};

export const purchase = (
  transaction_id: string,
  value: number,
  items: IGtagItem[]
) => {
  console.log(
    `In GTAG purchase with ${transaction_id}, ${value} and ${JSON.stringify(
      items
    )}`
  );
  window.gtag("event", "purchase", {
    transaction_id: transaction_id,
    value: value,
    currency: "INR",
    items: items,
  });
};

export const exception = (description: string, fatal = false) => {
  window.gtag("event", "exception", {
    description: description,
    fatal: fatal,
  });
};
