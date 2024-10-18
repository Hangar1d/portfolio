const Footer = () => {
  return (
    <footer className="bg-jetBlack p-8 text-white flex justify-between">
      <div>
        <h3 className="text-xl font-bold">Contact</h3>
        <p>Email: behangarid1@gmail.com</p>
      </div>
      <div>
        <h3 className="text-xl font-bold">Socials</h3>
        <ul>
          <li>
            <a href="https://github.com/Hangar1d" className="hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hangarid-b-873824302/?trk=opento_sprofile_details"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
