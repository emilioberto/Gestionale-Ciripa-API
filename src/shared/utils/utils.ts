// Returns the AppData folder for the correct environment
// OS X - '/Users/user/Library/Preferences'
// Windows 8 - 'C:\Users\user\AppData\Roaming'
// Windows XP - 'C:\Documents and Settings\user\Application Data'
// Linux - '/home/user/.local/share'

export class Utils {
  static getAppDataPath(): string {
    const appName = 'GestionaleCiripa';
    const windowsAppDataPath = process.env.APPDATA;
    const unixAppDataPath = process.platform === 'darwin'
      ? process.env.HOME + '/Library/Preferences'
      : process.env.HOME + '/.local/share';

    if (windowsAppDataPath) {
      return `${windowsAppDataPath}/${appName}`;
    } else {
      return `${unixAppDataPath}/${appName}`;
    }
  }
}
