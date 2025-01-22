import React from 'react';
import { useTranslation } from 'react-i18next';
import { About, Solutions, Process, Features, Industries, Testimonials } from '../components/index' 

export default function Info() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 text-gray-800">
      {/* Secció About (que també es mostra a la pàgina principal)*/}
      <About />
      <hr class="dotted"></hr>
      {/* Secció Solutions */}
      <Solutions />
      {/* Secció Process */}
      <Process />
      {/* Secció Features */}
      <Features />
      {/* Secció Industries */}
      <Industries />
      {/* Secció Testimonials */}
      <Testimonials />
    </section>
  );
}