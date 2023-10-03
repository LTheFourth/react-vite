class CookieService {
  get(cookieName: string) {
    const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === cookieName) {
        return value;
      }
    }
    return null;
  }

  set(cookieName: string, data: string, expirationInMinutes: number) {
    const expirationDate = new Date();
    expirationDate.setTime(
      expirationDate.getTime() + expirationInMinutes * 60 * 1000
    );
    const cookieValue = `${cookieName}=${data}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
  }

  delete(cookieName: string) {
    const pastExpirationDate = new Date(0); // Set expiration date to a past time
    const cookieValue = `${cookieName}=; expires=${pastExpirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
  }
}

const cookieService = new CookieService();
export default cookieService;
