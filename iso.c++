

#include <bits/stdc++.h>
using namespace std;

int main()
{
    string s = "badc", t = "baba";
    map<char, char> mp;

    for (int i = 0; i < s.size(); i++)
    {
        if (mp.find(s[i]) != mp.end())
        {
            if (mp[s[i]] == t[i])
                continue;
            else
                break;
        }
        mp[s[i]] = t[i];
    }

    for (auto i : mp)
    {
        cout << i.first << " " << i.second << endl;
    }
}