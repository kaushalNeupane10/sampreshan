import ContactInfo from "@/components/contact/ContactInfo";

export default function page() {
  return (
    <>
      <section className="bg-bg-page py-16 md:py-20 lg:py-24">
        <div className="container-custom px-4">
          <div className="grid gap-10 lg:grid-cols-[420px_1fr] xl:gap-16">
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
