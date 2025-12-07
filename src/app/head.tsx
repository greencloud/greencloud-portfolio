export default function Head() {
  return (
    <>
      {/* GA4 gtag.js snippet */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-MNLJ711DQ8"
      ></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MNLJ711DQ8');
          `,
        }}
      />
    </>
  );
}
