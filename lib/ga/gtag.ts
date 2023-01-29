export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  console.log(`In GTAG pageview for URL ${url}`);
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  console.log(
    `In GTAG event with ${action}, ${category}, ${label} and ${value}`
  );
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
