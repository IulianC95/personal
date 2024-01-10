// În CookiePolicy.jsx
export default function CookiePolicy({ onAccept }) {
  return (
    <div className="cookie-policy bg-black flex flex-col text-center pt-2">
      <p className="text-white">
        We use{' '}
        <a
          href="https://www.cookiepolicygenerator.com/live.php?token=cIGgorcmmNxF7fgQdcydALKpfMd8m1hl"
          target="_blank"
          className="cookies"
        >
          cookies
        </a>{' '}
        to enhance your experience. By continuing to browse, you agree to their
        use.
      </p>
      <button className="text-white bg-green-700" onClick={onAccept}>
        Accept Cookies
      </button>
    </div>
  );
}
