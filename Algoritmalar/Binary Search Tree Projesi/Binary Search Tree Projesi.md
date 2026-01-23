Binary Search Tree Projesi
Proje 3

[7,5,1,8,3,6,0,9,4,2] dizisinin Binary-Search-Tree aşamalarını yazınız.

Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

Aşamalar şu şekildedir:

7 eklenir:İlk eleman olduğu için Root (Kök) 7'dir.
5 eklenir: 7'den küçük mü? Evet. 7'nin soluna eklenir.
1 eklenir: 7'den küçük (Sola git) -> 5'ten küçük (Sola git). 5'in soluna eklenir.
8 eklenir: 7'den büyük mü? Evet. 7'nin sağına eklenir.
3 eklenir: 7'den küçük (Sola) -> 5'ten küçük (Sola) -> 1'den büyük (Sağa). 1'in sağına eklenir.
6 eklenir: 7'den küçük (Sola) -> 5'ten büyük (Sağa). 5'in sağına eklenir.
0 eklenir: 7'den küçük -> 5'ten küçük -> 1'den küçük. 1'in soluna eklenir.
9 eklenir: 7'den büyük (Sağa) -> 8'den büyük (Sağa). 8'in sağına eklenir.
4 eklenir: 7'den küçük -> 5'ten küçük -> 1'den büyük -> 3'ten büyük. 3'ün sağına eklenir.
2 eklenir: 7'den küçük -> 5'ten küçük -> 1'den büyük -> 3'ten küçük. 3'ün soluna eklenir.

          7
         / \
        5   8
       / \   \
      1   6   9
     / \
    0   3
       / \
      2   4