import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppDataPath(): string {
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
