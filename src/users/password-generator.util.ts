import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordGenerator {
  /**
   * Generate a secure password with specified requirements
   * @param length - Length of the password (default: 8)
   * @returns string - Generated password
   */
  generatePassword(length: number = 8): string {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*';
    
    // Ensure at least one character from each category
    let password = '';
    password += this.getRandomChar(uppercase); // 1 uppercase
    password += this.getRandomChar(lowercase); // 1 lowercase
    password += this.getRandomChar(numbers);   // 1 number
    password += this.getRandomChar(symbols);   // 1 symbol
    
    // Fill the rest with random characters
    const allChars = uppercase + lowercase + numbers + symbols;
    for (let i = password.length; i < length; i++) {
      password += this.getRandomChar(allChars);
    }
    
    // Shuffle the password to make it more random
    return this.shuffleString(password);
  }

  /**
   * Generate a simple password for mobile users (easier to type)
   * @param length - Length of the password (default: 6)
   * @returns string - Generated simple password
   */
  generateSimplePassword(length: number = 6): string {
    const numbers = '0123456789';
    let password = '';
    
    for (let i = 0; i < length; i++) {
      password += this.getRandomChar(numbers);
    }
    
    return password;
  }

  /**
   * Get a random character from a string
   * @param chars - String of characters to choose from
   * @returns string - Random character
   */
  private getRandomChar(chars: string): string {
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }

  /**
   * Shuffle a string to randomize character positions
   * @param str - String to shuffle
   * @returns string - Shuffled string
   */
  private shuffleString(str: string): string {
    const array = str.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
  }

  /**
   * Generate password based on user type
   * @param userType - Type of user (mobile, web, both)
   * @returns string - Generated password
   */
  generatePasswordByUserType(userType: string): string {
    switch (userType) {
      case 'mobile':
        // Mobile users get simpler passwords for easier typing
        return this.generateSimplePassword(6);
      case 'web':
      case 'both':
        // Web users get more complex passwords
        return this.generatePassword(10);
      default:
        return this.generatePassword(8);
    }
  }
} 