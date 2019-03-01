#include <iostream>
#include <vector>
#include <algorithm>
#include <map>
#include <set>
#include <cmath>
#include <cstring>
#include <iomanip>
#include <random>
#include <chrono>
#include <queue>
#include <fstream>
using namespace std;
using namespace chrono;
typedef long long ll;
typedef pair<int, int> PII;
typedef pair<ll, ll> PLL;
#define INF 1000000000
#define MOD 1000000007
#define EPS 0.00000001

int main(){
    
        fstream in("d_pet_pictures.txt");
        cin.rdbuf(in.rdbuf());
    
    
    
    int N; cin >> N;
    struct photo {
        int idx;
        char angle;
        vector<string> tags;
    };
    vector<photo> P(N);
    
    for(int i=0; i<N; i++){
        cin >> P[i].angle;
        int k; cin >> k;
        for(int j=0; j<k; j++){
            string s; cin >> s;
            P[i].tags.push_back(s);
            P[i].idx = i;
        }
    }
    
    vector<photo> VP;
    vector<photo> HP;
    for(int i=0; i<N; i++){
        if(P[i].angle=='V') VP.push_back(P[i]);
        else HP.push_back(P[i]);
    }
    
    
    
    vector<pair<pair<int, int>, set<string> > > SlidesV;
    
    
    
    for(int i=0; i<HP.size(); i++){
        pair<pair<int, int>, set<string> > st;
        st.first.first = HP[i].idx;
        st.first.second = HP[i].idx;
        for(int j=0; j<HP[i].tags.size(); j++){
            st.second.insert(HP[i].tags[j]);
        }
        SlidesV.push_back(st);
    }
    
    
    vector<pair<pair<int, int>, set<string> > > Ans;
    
    
    
    
    auto st = system_clock::now();
    auto nt = system_clock::now();
    auto dur = nt - st;
    auto misec = duration_cast<microseconds>(dur).count();
    
    ll score = 0;
    while(misec < 2900 * 1000 * 20){
        ll sum = 0;
        
        vector<pair<pair<int, int>, set<string> > > SSSS = SlidesV;
        
        for(int i=0; i+1<VP.size(); i+=2){
            pair<pair<int, int>, set<string> > st;
            st.first.first = VP[i].idx;
            st.first.second = VP[i+1].idx;
            for(int j=0; j<VP[i].tags.size(); j++){
                st.second.insert(VP[i].tags[j]);
            }
            for(int j=0; j<VP[i+1].tags.size(); j++){
                st.second.insert(VP[i+1].tags[j]);
            }
            SSSS.push_back(st);
        }
        
        random_shuffle(SSSS.begin(), SSSS.end());
        
        
        for(int i=0; i<SSSS.size()-1; i++){
            set<string> S1 = SSSS[i].second;
            set<string> S2 = SSSS[i+1].second;
            set<string> result;
            set_intersection(S1.begin(), S1.end(), S2.begin(), S2.end(), inserter(result, result.begin()));
            size_t b = result.size();
            size_t a = S1.size() - b;
            size_t c = S2.size() - b;
            
            sum += min(a, min(b, c));
        }
        
        if(sum > score){
            score = sum;
            Ans.clear();
            for(int i=0; i<SSSS.size(); i++){
                Ans.push_back(SSSS[i]);
            }
        }
        
        random_shuffle(SlidesV.begin(), SlidesV.end());
        random_shuffle(VP.begin(), VP.end());
        
        nt = system_clock::now();
        dur = nt - st;
        misec = duration_cast<microseconds>(dur).count();
    }
    
    cout << Ans.size() << endl;
    for(int i=0; i<Ans.size(); i++){
        if(Ans[i].first.first!=Ans[i].first.second) cout << Ans[i].first.first << " " << Ans[i].first.second << endl;
        else cout << Ans[i].first.first << endl;
    }
    
    return 0;
}
