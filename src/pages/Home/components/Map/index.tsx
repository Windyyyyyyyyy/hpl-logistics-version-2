const Map = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.9315374971557!2d106.65315267480437!3d10.743412089403357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e5e883ee1ab%3A0x3d7b26441508751!2zQ8OUTkcgVFkgVE5ISCBI4buiUCBQSMOBVCBMT0dJU1RJQ1M!5e1!3m2!1svi!2s!4v1735533947510!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
