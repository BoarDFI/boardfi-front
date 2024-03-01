import { mockCryptoCurrenciesRateViews } from "@/constants";
import ICryptoCurrienciesRateView from "@/constants/interfaces/CryptoCurrenciesRateView.interface";
import { Observable, delay, of } from "rxjs";

export class CryptoCurrenciesService {
    private mockCryptoCurrenciesRateViews: ICryptoCurrienciesRateView[] = [
      ...mockCryptoCurrenciesRateViews
    ];
  
    getRecentlyAdded(limit: number): Observable<ICryptoCurrienciesRateView[]> {
      const recentlyAdded = this.mockCryptoCurrenciesRateViews.slice(0, limit);
      return of(recentlyAdded).pipe(delay(500));
    }
  
    getHotCryptos(limit: number): Observable<ICryptoCurrienciesRateView[]> {
        const recentlyAdded = this.mockCryptoCurrenciesRateViews.slice(0, limit);
        return of(recentlyAdded).pipe(delay(500));
    }
  }