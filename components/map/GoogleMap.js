

const GoogleMap = () => {
  return (
      <div
          id="googleMap"
          className="googleMap mt-4"
      >
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7298.960161236021!2d90.3701609!3d23.837080450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14a3366b005%3A0x901b07016468944c!2z4Kau4Ka_4Kaw4Kaq4KeB4KawIOCmoeCmvyzgppMs4KaP4KaH4KaaLOCmj-CmuCwg4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1698303419331!5m2!1sbn!2sbd"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
  );
}

export default GoogleMap