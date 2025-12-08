import nayaxN from "@/assets/images/n-logo.png";

export const Footer = () => (
  <footer className="flex flex-col content-center items-center justify-center p-4">
    <div className="flex-1">
      <figure className="w-full flex flex-col items-center">
        <img src={nayaxN} alt="Nayax Logo" width={40} />
        <figcaption>Nayax</figcaption>
      </figure>
    </div>
    <div className="content-center items-center flex-1">
      <p className="text-xs">
        &copy; 2025 Nayax Micromarkets. All rights reserved.
      </p>
    </div>
  </footer>
);
