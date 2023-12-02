import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface RequestCacheEntry {
  url: string;
  response: HttpResponse<any>;
  lastRead: number;
}

@Injectable({
  providedIn: 'root',
})
export class RequestCacheService {
  private cache = new Map<string, RequestCacheEntry>();
  private maxAge = 60 * 60 * 1000;

  getCachedResponse(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < Date.now() - this.maxAge;

    return isExpired ? undefined : cached.response;
  }

  setCache(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    const entry = { url, response, lastRead: Date.now() };
    const expired = Date.now() - this.maxAge;

    this.cache.set(url, entry);
    this.cache.forEach(entry => {
      if (entry.lastRead < expired) {
        this.cache.delete(entry.url);
      }
    });
  }
}
