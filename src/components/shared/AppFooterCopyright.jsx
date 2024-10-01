function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <a
          href="https://github.com/Jesse-Chong"
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          React & Tailwind CSS Portfolio
        </a>
        .
        <p className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
          Jesse
        </p>
        <a
          href="/privacy-policy"
          className="hover:underline text-secondary-dark dark:text-secondary-light hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;