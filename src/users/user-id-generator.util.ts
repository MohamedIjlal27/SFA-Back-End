import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class UserIdGenerator {
  constructor(private prisma: PrismaService) {}

  /**
   * Generate a role-based user ID with automatic numbering
   * @param role - The user's role
   * @param companyId - The company ID
   * @returns Promise<string> - The generated user ID
   */
  async generateUserId(role: string, companyId: string): Promise<string> {
    const rolePrefix = this.getRolePrefix(role);
    
    if (!rolePrefix) {
      throw new Error(`Invalid role: ${role}. Supported roles: Sales/Lead Manager, Sales Rep, Regional Manager`);
    }

    // Find the highest existing number for this role prefix in the company
    const existingUsers = await this.prisma.user.findMany({
      where: {
        companyId,
        exeId: {
          startsWith: rolePrefix,
        },
      },
      select: {
        exeId: true,
      },
      orderBy: {
        exeId: 'desc',
      },
    });

    let nextNumber = 1;

    if (existingUsers.length > 0) {
      // Extract the number from the highest existing ID
      const highestId = existingUsers[0].exeId;
      const numberMatch = highestId.match(new RegExp(`^${rolePrefix}(\\d+)$`));
      
      if (numberMatch) {
        nextNumber = parseInt(numberMatch[1], 10) + 1;
      }
    }

    // Format the number with leading zeros (e.g., 001, 002, etc.)
    const formattedNumber = nextNumber.toString().padStart(3, '0');
    
    return `${rolePrefix}${formattedNumber}`;
  }

  /**
   * Get the role prefix based on the role name
   * @param role - The role name
   * @returns string - The role prefix
   */
  private getRolePrefix(role: string): string {
    const roleMap: { [key: string]: string } = {
      'Sales/Lead Manager': 'SM',
      'Sales Rep': 'SR',
      'Regional Manager': 'RM',
      'Admin': 'ADMIN', // Special case for admin
    };

    return roleMap[role] || null;
  }

  /**
   * Validate if a role is supported for ID generation
   * @param role - The role to validate
   * @returns boolean - True if the role is supported
   */
  isSupportedRole(role: string): boolean {
    return this.getRolePrefix(role) !== null;
  }

  /**
   * Get all supported roles
   * @returns string[] - Array of supported roles
   */
  getSupportedRoles(): string[] {
    return ['Sales/Lead Manager', 'Sales Rep', 'Regional Manager'];
  }
} 