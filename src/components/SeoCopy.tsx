const OUT_LINK =
  "font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4";

export default function SeoCopy() {
  return (
    <section
      aria-label="About Sarvada Organic"
      className="bg-cream-100 py-10 md:py-14"
    >
      <div className="container-wide">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-2xl font-semibold leading-tight text-forest-800 md:text-3xl">
            Sarvada Organic, vermicompost made in India
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            <strong className="text-forest-800">Sarvada Organic</strong>, also
            searched as <em>Sarva Organic</em>, <em>Sarvaorganic</em> or simply{" "}
            <em>Sarvada</em>, makes and ships vermicompost for Indian homes.
            Since 2018, <strong>12,000+ plant parents</strong> have used our{" "}
            <strong>100% pure vermicompost</strong> for indoor plants, kitchen
            herbs, terrace gardens and nursery saplings. We do not cut it with
            silt, sand or preservatives.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            Buy <strong>vermi compost</strong>, <strong>organic fertilizer</strong>,{" "}
            <strong>earthworm compost</strong> and other plant-care products
            online with free delivery above ₹499 and Cash on Delivery across
            India. Our slow-cured, hand-sieved vermicompost is rich in NPK,
            humic acid, living microbes and trace minerals. Use it for tulsi,
            money plants, snake plants, roses, tomatoes, chillies, succulents
            and fruit plants.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            Looking to <strong>buy vermicompost online in India</strong>,{" "}
            <strong>buy organic fertilizer</strong>, or start a monthly
            vermicompost subscription? Sarvada Organic delivers fresh from our
            farm across India, with next-day dispatch and batch testing. Our
            vermicompost is lab certified by{" "}
            <a
              href="https://svtestinglaboratories.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={OUT_LINK}
            >
              SV Testing Laboratories
            </a>{" "}
            (NABL accredited) — report SVTL-10-260604-01 shows Nitrogen at{" "}
            <strong>3.16%</strong>, above the ~1.5–2.2% range often cited for
            typical vermicompost.{" "}
            <a
              href="/lab-reports/svtl-10-260604-01.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={OUT_LINK}
            >
              Download the lab report PDF
            </a>
            .
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            For official guidance on vermicomposting and organic farming in
            India, see{" "}
            <a
              href="https://agritech.tnau.ac.in/org_farm/orgfarm_vermicompost.html"
              target="_blank"
              rel="noopener noreferrer"
              className={OUT_LINK}
            >
              TNAU Agritech on vermicompost
            </a>
            , the{" "}
            <a
              href="https://icar.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={OUT_LINK}
            >
              Indian Council of Agricultural Research (ICAR)
            </a>
            , and manure guidance from{" "}
            <a
              href="https://agritech.tnau.ac.in/ta/org_farm/orgfarm_manure.html"
              target="_blank"
              rel="noopener noreferrer"
              className={OUT_LINK}
            >
              TNAU organic farm manure resources
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
