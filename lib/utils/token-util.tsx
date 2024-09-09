'use client'
import { jwtDecode } from 'jwt-decode';
import Cookie from 'js-cookie';

/**
 * This file utilizes a singleton design pattern for creating a class of token util so that
 *  a single token service is created for entire project.
 * TODO: Check if type used in functions are correct or not
 */
class TokenUtil {
    private static instance: TokenUtil;

    // Private constructor prevents instantiation from other classes
    private constructor() {}

    // Public method to access the Singleton instance
    public static getInstance(): TokenUtil {
        if (!TokenUtil.instance) {
            TokenUtil.instance = new TokenUtil();
        }
        return TokenUtil.instance;
    }

    /**
     * Set Access token in local storage
     */
    public setAccessToken(accessToken: string) {
        Cookie.set('accessToken', accessToken);
    }

    /**
     * Get Access token from local storage
     */
    public getAccessToken(): string | undefined {
        return Cookie.get('accessToken');
    }

    /**
     *Remove Access token from local storage
     */
    public deleteAccessToken(){
        return Cookie.remove('accessToken');
    }

    /**
     * Get Refresh token from stored Cookie
     */
    public getRefreshToken(): string | undefined {
        return Cookie.get('refresh_token');
    }

    /**
     * Decode Access token JWT
     */
    public decodeAccessToken(): object | null {
        const token = this.getAccessToken();
        if (token) {
            return jwtDecode(token);
        }
        return null;
    }

    /**
     * Decode Refresh token JWT
     */
    public decodeRefreshToken(): object | null {
        const token = this.getRefreshToken();
        if (token) {
            return jwtDecode(token);
        }
        return null;
    }
}

// Usage
export const tokenService = TokenUtil.getInstance();
