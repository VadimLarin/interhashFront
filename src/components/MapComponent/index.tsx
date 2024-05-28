
export default function MapComponent() {
    return (
        <div style={{ width: '100%', height: '455px', border: 'none' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.694030249576!2d39.65759944526521!3d47.24877137082104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b92136604c9b%3A0x28cba2673664ca2b!2z0JjQvdGB0YLQuNGC0YPRgiDQvtC_0LXRgNC10LbQsNGO0YnQuNGFINGC0LXRhdC90L7Qu9C-0LPQuNC5IMKr0KjQutC-0LvQsCDQmNC60YHCuw!5e0!3m2!1sru!2sru!4v1716829074277!5m2!1sru!2sru"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      );
    };