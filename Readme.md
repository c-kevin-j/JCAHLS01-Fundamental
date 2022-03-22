# Introduce Git and Github
## ⏺️ Git
>Merupakan bagian dari SCM (Source Code Management) yang ada pada local storage / pc.

## ⏺️ Github
>Management program secara online. Sehingga, program / code bisa di-share secara umum / open-source. (biasa dilakukan jika ingin melakukan kolaborasi dengan orang lain, dan juga bisa untuk membantu proses deployment) 

---
## Bagian pada Git
1. Modified / Changes Session
   * Bagian dari git yang me-record perubahan yang dilakukan pada file di dalam project (di VSCode bisa dilihat di bagian source control).
     * Record perubahan
     * Record penambahan file
     * Record pengurangan file
2. Staged Session
   * Bagian dari git untuk menyiapkan file apa saja yang akan disimpan ke dalam git
3. Commited Session
   * Bagian dari git untuk menyimpan perubahan pada file project

---
## Konfigurasi Git
Menghubungkan Git dengan Github :
- Install git
- Konfigurasi username (pada terminal) : git config --global user.name "username github"
- Konfigurasi email (pada terminal) : git config --global user.email "email github"

>Menyiapkan project untuk menggunakan git (pada saat pertama kali project, yang harus dilakukan step 1-3)
1. Inisialisasi git / mengaktifkan git pada project
   - git init
2. Melihat status git pada project / melihat bagian modified/changes
   - git status
3. Memindahkan dari modified / changes ke staged session
   - git add nama_file : nama_file jika file spesifik (contoh: git add day01.js)
   - git add . : jika diarahkan ke semua file
4. Menyimpan perubahan di commited session/ ke dalam git
   - git commit -m "pesan" (pesan bisa diisi definisi perubahan apa saja yang dilakukan)
5. Melihat history commit
   - git log
6. Menambahkan link github
   - git remote add alias_name link-github (contoh: git remote add origin *link*)
   - git remote -v (memerika link github repo yang terdaftar pada project)
7. Konfigurasi branch utama
   - git branch -M nama_branch (contoh: git branch -M main)
8. Mengupload / menyimpan ke github
   - git push -u alias_name nama_branch (contoh: git push -u origin main)

