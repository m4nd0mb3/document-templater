# Use the official Node.js image based on Alpine Linux as base
FROM node:14
# FROM node:14-alpine
LABEL mantainer="Jonathan Mandombe"

# Set the working directory inside the container
WORKDIR /app


# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# NOTE: If you don't run the mkdir -p /usr/share/man/man1 /usr/share/man/man2 you'll run into dependency problems with ca-certificates, openjdk-11-jre-headless etc. 
RUN mkdir -p /usr/share/man/man1 /usr/share/man/man2

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    libxinerama1 libfontconfig1 libdbus-glib-1-2 libcairo2 libcups2 libglu1-mesa libsm6 \
    openjdk-11-jre wget && \
    # openjdk-11-jre wget \
    # fonts-3270 fonts-adf-accanthis fonts-adf-baskervald fonts-adf-berenis fonts-adf-gillius fonts-adf-ikarius \
    # fonts-adf-irianis fonts-adf-libris fonts-adf-mekanus fonts-adf-oldania fonts-adf-romande fonts-adf-switzera \
    # fonts-adf-tribun fonts-adf-universalis fonts-adf-verana fonts-aksharyogini2 fonts-alee fonts-ancient-scripts \
    # fonts-aoyagi-kouzan-t fonts-aoyagi-soseki fonts-arabeyes fonts-arkpandora fonts-arphic-bkai00mp fonts-arphic-bsmi00lp \
    # fonts-arphic-gbsn00lp fonts-arphic-gkai00mp fonts-arphic-ukai fonts-arphic-uming fonts-atarismall fonts-averia-gwf \
    # fonts-averia-sans-gwf fonts-averia-serif-gwf fonts-babelstone-han fonts-babelstone-modern fonts-baekmuk fonts-bebas-neue \
    # fonts-beng fonts-beng-extra fonts-beteckna fonts-blankenburg fonts-bpg-georgian fonts-breip fonts-cabin fonts-cabinsketch \
    # fonts-cantarell fonts-cardo fonts-century-catalogue fonts-circos-symbols fonts-cmu fonts-cns11643-kai fonts-cns11643-sung \
    # fonts-comfortaa fonts-comic-neue fonts-croscore fonts-crosextra-caladea fonts-crosextra-carlito fonts-cwtex-docs fonts-cwtex-fs \
    # fonts-cwtex-heib fonts-cwtex-kai fonts-cwtex-ming fonts-cwtex-yen fonts-dancingscript fonts-ddc-uchen fonts-dejavu fonts-dejavu-core \
    # fonts-dejavu-extra fonts-dejima-mincho fonts-deva fonts-deva-extra fonts-dkg-handwriting fonts-dosis fonts-droid-fallback fonts-dseg \
    # fonts-dustin fonts-dzongkha fonts-ebgaramond fonts-ebgaramond-extra fonts-ecolier-court fonts-ecolier-lignes-court fonts-eeyek \
    # fonts-elusive-icons fonts-emojione fonts-entypo fonts-essays1743 fonts-evertype-conakry fonts-f500 fonts-fantasque-sans fonts-fanwood \
    # fonts-farsiweb fonts-femkeklaver fonts-firacode fonts-font-awesome fonts-freefarsi fonts-freefont-otf fonts-freefont-ttf fonts-gargi \
    # fonts-georgewilliams fonts-gfs-artemisia fonts-gfs-baskerville fonts-gfs-bodoni-classic fonts-gfs-complutum fonts-gfs-didot fonts-gfs-didot-classic \
    # fonts-gfs-gazis fonts-gfs-neohellenic fonts-gfs-olga fonts-gfs-porson fonts-gfs-solomos fonts-gfs-theokritos fonts-glewlwyd fonts-go fonts-goudybookletter \
    # fonts-gubbi fonts-gujr fonts-gujr-extra fonts-guru fonts-guru-extra fonts-hack fonts-hack-otf fonts-hack-ttf fonts-hack-web fonts-hanazono fonts-horai-umefont \
    # fonts-hosny-amiri fonts-hosny-thabit fonts-humor-sans fonts-inconsolata fonts-indic fonts-ipaexfont fonts-ipaexfont-gothic fonts-ipaexfont-mincho fonts-ipafont \
    # fonts-ipafont-gothic fonts-ipafont-mincho fonts-ipafont-nonfree-jisx0208 fonts-ipafont-nonfree-uigothic fonts-ipamj-mincho fonts-isabella fonts-johnsmith-induni \
    # fonts-jsmath fonts-junction fonts-junicode fonts-jura fonts-kacst fonts-kacst-one fonts-kalapi fonts-kanjistrokeorders fonts-karla fonts-kaushanscript fonts-khmeros \
    # fonts-khmeros-core fonts-kiloji fonts-klaudia-berenika fonts-knda fonts-komatuna fonts-konatu fonts-kouzan-mouhitsu fonts-kristi fonts-lao fonts-larabie-deco \
    # fonts-larabie-straight fonts-larabie-uncommon fonts-lato fonts-ldco fonts-league-spartan fonts-leckerli-one fonts-levien-museum fonts-levien-typoscript \
    # fonts-lexi-gulim fonts-lexi-saebom fonts-lg-aboriginal fonts-liberation fonts-liberation2 fonts-lindenhill fonts-linex fonts-linuxlibertine fonts-lklug-sinhala \
    # fonts-lmodern fonts-lobster fonts-lobstertwo fonts-lohit-beng-assamese fonts-lohit-beng-bengali fonts-lohit-deva fonts-lohit-deva-marathi fonts-lohit-deva-nepali \
    # fonts-lohit-gujr fonts-lohit-guru fonts-lohit-knda fonts-lohit-mlym fonts-lohit-orya fonts-lohit-taml fonts-lohit-taml-classical fonts-lohit-telu fonts-lyx \
    # fonts-maitreya fonts-manchufont fonts-materialdesignicons-webfont fonts-mathematica fonts-mathjax fonts-mathjax-extras fonts-meera-taml fonts-migmix fonts-mikachan \
    # fonts-misaki fonts-mlym fonts-mmcedar fonts-moe-standard-kai fonts-moe-standard-song fonts-mona fonts-monapo fonts-monlam fonts-monoid fonts-mononoki fonts-motoya-l-cedar \
    # fonts-motoya-l-maruberi fonts-mph-2b-damase fonts-mplus fonts-nafees fonts-nakula fonts-nanum fonts-nanum-coding fonts-nanum-eco fonts-nanum-extra fonts-naver-d2coding \
    # fonts-navilu fonts-noto fonts-noto-cjk fonts-noto-cjk-extra fonts-noto-color-emoji fonts-noto-hinted fonts-noto-mono fonts-noto-unhinted fonts-ocr-a fonts-ocr-b \
    # fonts-octicons fonts-oflb-asana-math fonts-oflb-euterpe fonts-okolaks fonts-oldstandard fonts-open-sans fonts-opendin fonts-opendyslexic fonts-opensymbol \
    # fonts-oradano-mincho-gsrr fonts-orya fonts-orya-extra fonts-oxygen fonts-pagul fonts-paktype fonts-pecita fonts-play fonts-powerline fonts-prociono \
    # fonts-quattrocento fonts-radisnoir fonts-ricty-diminished fonts-roboto fonts-roboto-fontface fonts-roboto-hinted fonts-roboto-slab fonts-roboto-unhinted \
    # fonts-rufscript fonts-sahadeva fonts-sambhota-tsugring fonts-sambhota-yigchung fonts-samyak fonts-samyak-deva fonts-samyak-gujr fonts-samyak-mlym \
    # fonts-samyak-orya fonts-samyak-taml fonts-sarai fonts-sawarabi-gothic fonts-sawarabi-mincho fonts-senamirmir-washra fonts-seto fonts-sil-abyssinica \
    # fonts-sil-andika fonts-sil-andika-compact fonts-sil-andikanewbasic fonts-sil-annapurna fonts-sil-charis fonts-sil-charis-compact fonts-sil-dai-banna \
    # fonts-sil-doulos fonts-sil-doulos-compact fonts-sil-ezra fonts-sil-galatia fonts-sil-gentium fonts-sil-gentium-basic fonts-sil-gentiumplus \
    # fonts-sil-gentiumplus-compact fonts-sil-harmattan fonts-sil-lateef fonts-sil-mondulkiri fonts-sil-mondulkiri-extra fonts-sil-nuosusil \
    # fonts-sil-padauk fonts-sil-scheherazade fonts-sil-sophia-nubian fonts-sil-taiheritagepro fonts-sil-zaghawa-beria fonts-sipa-arundina \
    # fonts-smc fonts-smc-anjalioldlipi fonts-smc-chilanka fonts-smc-dyuthi fonts-smc-karumbi fonts-smc-keraleeyam fonts-smc-manjari \
    # fonts-smc-meera fonts-smc-rachana fonts-smc-raghumalayalamsans fonts-smc-suruma fonts-smc-uroob fonts-stix fonts-symbola \
    # fonts-takao fonts-takao-gothic fonts-takao-mincho fonts-takao-pgothic fonts-taml fonts-taml-tamu fonts-taml-tscu fonts-telu \
    # fonts-telu-extra fonts-teluguvijayam fonts-texgyre fonts-thai-tlwg fonts-thai-tlwg-otf fonts-thai-tlwg-ttf fonts-thai-tlwg-web \
    # fonts-tibetan-machine fonts-tiresias fonts-tlwg-garuda fonts-tlwg-garuda-otf fonts-tlwg-garuda-ttf fonts-tlwg-kinnari fonts-tlwg-kinnari-otf \
    # fonts-tlwg-kinnari-ttf fonts-tlwg-laksaman fonts-tlwg-laksaman-otf fonts-tlwg-laksaman-ttf fonts-tlwg-loma fonts-tlwg-loma-otf fonts-tlwg-loma-ttf \
    # fonts-tlwg-mono fonts-tlwg-mono-otf fonts-tlwg-mono-ttf fonts-tlwg-norasi fonts-tlwg-norasi-otf fonts-tlwg-norasi-ttf fonts-tlwg-purisa \
    # fonts-tlwg-purisa-otf fonts-tlwg-purisa-ttf fonts-tlwg-sawasdee fonts-tlwg-sawasdee-otf fonts-tlwg-sawasdee-ttf fonts-tlwg-typewriter \
    # fonts-tlwg-typewriter-otf fonts-tlwg-typewriter-ttf fonts-tlwg-typist fonts-tlwg-typist-otf fonts-tlwg-typist-ttf fonts-tlwg-typo fonts-tlwg-typo-otf \
    # fonts-tlwg-typo-ttf fonts-tlwg-umpush fonts-tlwg-umpush-otf fonts-tlwg-umpush-ttf fonts-tlwg-waree fonts-tlwg-waree-otf fonts-tlwg-waree-ttf \
    # fonts-tomsontalks fonts-tuffy fonts-ubuntu fonts-ubuntu-console fonts-ubuntu-font-family-console fonts-ubuntu-title fonts-ukij-uyghur \
    # fonts-umeplus fonts-unfonts-core fonts-unfonts-extra fonts-unikurdweb fonts-uralic fonts-urw-base35 fonts-vlgothic fonts-vollkorn fonts-wine \
    # fonts-woowa-hanna fonts-wqy-microhei fonts-wqy-zenhei fonts-yanone-kaffeesatz fonts-yozvox-yozfont fonts-yozvox-yozfont-antique \
    # fonts-yozvox-yozfont-cute fonts-yozvox-yozfont-edu fonts-yozvox-yozfont-new-kana fonts-yozvox-yozfont-standard-kana fonts-yrsa-rasa && \
    wget https://downloadarchive.documentfoundation.org/libreoffice/old/7.5.1.1/deb/x86_64/LibreOffice_7.5.1.1_Linux_x86-64_deb.tar.gz && \
    tar -zxvf LibreOffice_7.5.1.1_Linux_x86-64_deb.tar.gz && \
    cd LibreOffice_7.5.1.1_Linux_x86-64_deb/DEBS && \
    dpkg -i *.deb && \
    # apt-get install -y --no-install-recommends ttf-mscorefonts-installer fonts-wqy-zenhei && \
    apt-get autoremove -y && \
    apt-get clean && \
    # rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* LibreOffice_7.5.1.1_Linux_x86-64_deb
    # rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /app/LibreOffice_7.5.1.1_Linux_x86-64_deb.tar.gz

# Expose the port on which the Express app will run
EXPOSE 3000

# Start the Express app
CMD ["npm", "start"]
