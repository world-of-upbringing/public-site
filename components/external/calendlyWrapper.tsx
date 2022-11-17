import Script from "next/script";
import { CALENDLY_LINK } from "../../lib/constants";

export default function CalendlyWrapper({
  url,
  transactionId,
}: {
  url?: string;
  transactionId: string;
}) {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-auto-load="false"
        id="calendly-widget"
        style={{ minWidth: "320px", height: "630px" }}
      />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
        onLoad={() => {
          window.Calendly.initInlineWidget({
            url: url ?? CALENDLY_LINK,
            parentElement: document.getElementById("calendly-widget"),
            prefill: {
              customAnswers: {
                a1: `${transactionId}`,
              },
            },
          });
        }}
      />
    </>
  );
}

/*
<script>
    Calendly.initInlineWidget({
        url: 'https://calendly.com/YOUR_LINK/30min',
        prefill: {
            name: "John Doe",
            email: "john@doe2.com",
            customAnswers: {
                a1: "Yes",
                a2: "At the Starbucks on 3rd and 16th"
            }
        }         
   });
</script>
<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" style="min-width:320px;height:580px;" data-auto-load="false">
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
<script>
Calendly.initInlineWidget({
url: 'https://calendly.com/YOURLINK'
});
</script>
</div>
<!-- Calendly inline widget end -->
*/
