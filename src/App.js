import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faLayerGroup, faBookOpen, faUsers, faDatabase, faUsersRectangle, faNewspaper, faSliders, faUser, faPersonChalkboard, faCalendarDays, faRectangleList, faImage, faVideo, faPhotoFilm, faBullhorn, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div id="layout-wrapper">
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="container mx-1">
          <div className="float-right">
            <SearchBar />
            <button className="tambahkritik btn btn-info waves-effect waves-light mt-0 text-white">
                <span className="font-size-13">Kontak Kami</span>
            </button>
          </div>
          {/* Logo */}
          <div className="navbar-brand-box">
              <Logo />
          </div>
          {/* Menu Navbar */}
          <button type="button" className="btn btn-sm p-0 font-size-16 d-lg-none header-item waves-effect waves-light" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
              <i className="fa fa-fw fa-bars"></i>
          </button>

          <div className="topnav">
              <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}

function SearchBar() {
  return(
    <div className="dropdown d-inline-block">
        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {/* <i className="mdi mdi-magnify"></i>  */}
            <FontAwesomeIcon icon={faSearch} />
        </button>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right" aria-labelledby="page-header-search-dropdown">

            <form action="https://bpbd.cirebonkab.go.id/cari" method="POST">
                {/* <input type="hidden" name="csrf_test_name" value="13e0ce59b26ab5d22a12b0e6c213935c"></input> */}
                  <div className="form-group m-0">
                    <div className="input-group">
                        <input type="text" className="form-control" name="keyword" id="keyword" placeholder="Cari..." aria-label="Pencarian" required=""></input>
                        <div className="input-group-append p-0">
                            <button className="btn btn-primary" type="submit" name="cari"><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                    </div>
                  </div>
            </form>
        </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-light topnav-menu">
        <div className="collapse navbar-collapse" id="topnav-menu-content">
            <ul className="navbar-nav mx-5">
              {/* <input type="hidden" value="1" name="menu_id"> */}
              <li><a className="nav-link mx-2" target="_parent" href="https://bpbd.cirebonkab.go.id/home"> <FontAwesomeIcon icon={faHome}/> Home</a></li>
              <li className="nav-item dropdown mx-2">
                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faLayerGroup}/> Profil
                  {/* <div className="arrow-down"></div> */}
                </a>
                <ul className="dropdown-menu" aria-labelledby="topnav-more">
                  <div className="dropdown">
                    <a href="https://bpbd.cirebonkab.go.id/halaman/detail/visi-dan-misi" className="dropdown-item">
                        <div className="d-inline-block icons-sm mx-2"><FontAwesomeIcon icon={faBookOpen}/></div>Visi dan Misi
                    </a>
                    <a href="https://bpbd.cirebonkab.go.id/halaman/detail/struktur-organisasi" className="dropdown-item">
                        <div className="d-inline-block icons-sm mx-2"><FontAwesomeIcon icon={faUsers}/></div>Struktur Organisasi
                    </a>
                    <a href="https://bpbd.cirebonkab.go.id/halaman/detail/tugas-pokok-dan-fungsi" className="dropdown-item">
                        <div className="d-inline-block icons-sm mx-2"><FontAwesomeIcon icon={faRectangleList}/></div>Tugas Pokok dan Fungsi
                    </a>
                    <a href="https://bpbd.cirebonkab.go.id/pegawai" className="dropdown-item">
                        <div className="d-inline-block icons-sm mx-2"><FontAwesomeIcon icon={faUsersRectangle}/></div>Data Pegawai
                    </a>
                  </div>
                </ul>
              </li>
              {/* <input type="hidden" value="3" name="menu_id"> */}
              <li><a className="nav-link mx-2" target="_parent" href="https://bpbd.cirebonkab.go.id/berita"> <FontAwesomeIcon icon={faNewspaper}/> Berita</a></li>
              {/* <input type="hidden" value="6" name="menu_id"> */}
              <li className="nav-item dropdown mx-2">
                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon={faSliders}/> Informasi
                    {/* <div className="arrow-down"></div> */}
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-more">
                    <div className="dropdown">
                        <a href="https://bpbd.cirebonkab.go.id/halaman/detail/data-relawan" className="dropdown-item">
                            <div className="d-inline-block icons-sm mx-2"><FontAwesomeIcon icon={faUser}/></div>Data Relawan</a>
                    
                        <a href="https://bpbd.cirebonkab.go.id/halaman/detail/laporan-kejadian-bencana-alam" className="dropdown-item">
                            <div className="d-inline-block icons-sm mx-2"><i className=""></i></div>Laporan Kejadian Bencana Alam</a>
                    
                        <a href="https://bpbd.cirebonkab.go.id/layanan" className="dropdown-item">
                            <div className="d-inline-block icons-sm mx-2"><FontAwesomeIcon icon={faPersonChalkboard}/></div>Layanan</a>
                    
                        <a href="https://bpbd.cirebonkab.go.id/agenda" className="dropdown-item">
                            <div className="d-inline-block icons-sm mx-2"><FontAwesomeIcon icon={faCalendarDays}/></div>Agenda</a>
                    
                        <a href="https://bpbd.cirebonkab.go.id/bankdata" className="dropdown-item">
                            <div className="d-inline-block icons-sm mx-2"><FontAwesomeIcon icon={faDatabase}/></div>Bank Data</a>
                    </div>
                </div>
              </li>
                          {/* <input type="hidden" value="5" name="menu_id"> */}
              <li className="nav-item dropdown mx-2">
                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faPhotoFilm}/> Galeri<div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-more">
                  <div className="dropdown">
                    <a href="https://bpbd.cirebonkab.go.id/foto" className="dropdown-item">
                        <div className="d-inline-block icons-sm mx-2"><FontAwesomeIcon icon={faImage}/></div>Foto</a>
                
                    <a href="https://bpbd.cirebonkab.go.id/video" className="dropdown-item">
                        <div className="d-inline-block icons-sm mx-2"><FontAwesomeIcon icon={faVideo}/></div>Video</a>
                  </div>
                </div>
              </li>                        
            </ul>
        </div>
    </nav>
  );
}

function Logo() {
  return (
    <a href="https://bpbd.cirebonkab.go.id" className="logo">
        <span className="logo-sm">
            <img className="p-0" src="https://bpbd.cirebonkab.go.id/public/img/konfigurasi/logo/1630999022_80bfa2ace6e86b86853b.png" height="28"/>
        </span>
        <span className="logo-lg">
            <img src="https://bpbd.cirebonkab.go.id/public/img/konfigurasi/logo/1630999022_80bfa2ace6e86b86853b.png"/>
        </span>
    </a>
  );
}

function Main() {
  return (
    <div className="main-content">
      <div className="page-content">
        {/* Page Title */}
        <TitlePage />
        {/* End of Page Title, end of Breadcrumbs */}
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="container">
                <Carousel />
              </div>
              <div className="col-xl-9">
                <AboutUs />
              </div>
              <div className="col-xl-3">
                <Pendapat />
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      {/*  INFORMASI INSTANSI (BERITA DLL) */}
                      <div className="row">
                        <div className="col-md-12 pt-2 pb-3">
                            <div className="title-konten text-center text-uppercase">Informasi Instansi</div>
                        </div>
                        <div className="col-md-12">
                          <TabList />
                          <div id="myTabContent" className="tab-content">
                            {/* <!-- BERITA --> */}
                            <ListBerita />
                            {/* <!-- LAYANAN --> */}
                            <Tab id="layanan" tab="layanan-tab" url="https://bpbd.cirebonkab.go.id/layanan" name="Lihat Semua Layanan" />
                            {/* <!-- PENGUMUMAN --> */}
                            <Tab id="pengumuman" tab="pengumuman-tab" url="https://bpbd.cirebonkab.go.id/pengumuman" name="Lihat Semua Pengumuman" />
                            {/* <!-- AGENDA --> */}
                            <Tab id="agenda" tab="agenda-tab" url="https://bpbd.cirebonkab.go.id/agenda" name="Lihat Semua Agenda" />
                            {/* <!-- BANK DATA --> */}
                            <ListDatabank />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="title-konten text-uppercase font-size-15 mb-3 text-center">Info Grafis</div>
                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner" role="listbox">
                                        <div class="carousel-item active">
                                            <div class=" wraper-info-new">
                                                <img class="img-thumbnail pointer" onclick="lihatinfo('43')" src="https://bpbd.cirebonkab.go.id/public/img/informasi/infografis/1648623687_579a72a409654a62c22c.jpg" />
                                            </div>
                                        </div>
                                          <div class="carousel-item">
                                            <div class=" wraper-info-new">
                                                <img class="img-thumbnail pointer" onclick="lihatinfo('44')" src="https://bpbd.cirebonkab.go.id/public/img/informasi/infografis/1648623708_8fce8e3366ece1c765d6.jpg" />
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class=" wraper-info-new">
                                                <img class="img-thumbnail pointer" onclick="lihatinfo('45')" src="https://bpbd.cirebonkab.go.id/public/img/informasi/infografis/1648623726_a174d22bdd289a2bc4bc.jpeg" />
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class=" wraper-info-new">
                                                <img class="img-thumbnail pointer" onclick="lihatinfo('46')" src="https://bpbd.cirebonkab.go.id/public/img/informasi/infografis/1648623743_c0e9373feca7b66c7b4b.jpeg" />
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class=" wraper-info-new">
                                                <img class="img-thumbnail pointer" onclick="lihatinfo('47')" src="https://bpbd.cirebonkab.go.id/public/img/informasi/infografis/1648624783_365cb76615301f29b81b.jpg" />
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class=" wraper-info-new">
                                                <img class="img-thumbnail pointer" onclick="lihatinfo('48')" src="https://bpbd.cirebonkab.go.id/public/img/informasi/infografis/1692936940_18df84cc17bb2b5be824.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <LinkTerkait />
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="title-konten text-center text-uppercase font-size-14 mb-3">Kantor Kami</div>
                                <div>
                                    https://maps.app.goo.gl/5DFMHQxHzSkQy4F1a
                                </div>

                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                {/* End Row */}
              </div>
            </div>
          </div>
        </div>
        {/* End of Page Content */}
      </div>
    </div>
  );
}

function TitlePage() {
  return (
    <div className="page-title-box">
      <div className="container-fluid"></div>
    </div>
  );
}

function Carousel() {
  return (
    <div className="card p-0">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block img-fluid" src="https://bpbd.cirebonkab.go.id/public/img/banner/1631001608_3fa21052871aea03acd0.jpg" width="100%" alt="First slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

function AboutUs() {
  const paragraphStyle = {
    textAlign: 'justify'
  };

  const imgStyle = {
    float: 'left',
    padding: '8px'
  };

  return (
    <div className="card">
      <div className="card-body p-3">
        <p style={paragraphStyle}>
          <img src="https://bpbd.cirebonkab.go.id/public/img/konfigurasi/pimpinan/WhatsApp%20Image%202023-.jpeg" style={imgStyle} height="180"/>
        </p>
        <Deskripsi deskripsi="Selamat datang di Website kami Badan Penanggulangan Bencana Daerah Kabupaten Cirebon, Website ini dimaksudkan sebagai sarana publikasi untuk memberikan Informasi dan gambaran Badan Penanggulangan Bencana Daerah Kabupaten Cirebon dalam Hal Publikasi kepada masyarakat. Melalui keberadaan website ini kiranya masyarakat dapat mengetahui seluruh informasi tentang Kebijakan Pemerintah Kabupaten Cirebon Sektor Penanganan bencana  di wilayah Pemerintahan Kabupaten Cirebon. Diharapkan website ini bisa dijadikan sebagai salah satu media komunikasi yang efektif, dapat memberikan informasi, layanan yang akurat dan akuntabel untuk membangun sarana dan prasarana penanganan bencana di Kabupaten Cirebon. Dan sebagai wujud rasa tanggungjawab kami dalam rangka meningkatkan pelayanan kepada masyarakat, maka kami adakan website dinas ini. Kritik dan saran terhadap kekurangan dan kesalahan yang ada sangat kami harapkan guna penyempurnaan Website ini dimasa akan datang. Semoga Website ini memberikan manfaat bagi kita semua. Terima Kasih..!" />
      </div>
    </div>
);
}

function Pendapat() {
  return (
    <div className="card">
        <div className="card-body">
            <div className="title-konten text-uppercase text-center font-size-15 mb-2">Jajak Pendapat </div>
              <div className="text-center text-secondary">                            
                <div className="text-center text-secondary">Tda</div>
                <hr/>
                <form action="https://bpbd.cirebonkab.go.id/" className="formtambah" enctype="multipart/form-data" method="post" accept-charset="utf-8">
                  <br/>
                  <center>
                    <input style={{width: '110px', padding: '2px', fontSize: '12px'}} type="submit" className="btn btn-primary btnsimpan mx-2" value="PILIH"/>
                    <a>         
                      <input style={{ width: '110px', padding: '2px', fontSize: '12px' }} type="button" className="btn btn-info btnlihatpoling mx-2" value="LIHAT HASIL"/>
                    </a>
                  </center>
                </form>
              </div>
        </div>
    </div>
  );
}

function TabList() {
  return (
    <ul className="nav nav-tabs nav-fill nav-pills" id="myTab" role="tablist">
      <li className="nav-item ms-1">
          <a className="nav-link active" id="berita-tab" data-bs-toggle="tab" href="#berita" role="tab" aria-controls="berita" aria-selected="true">
            <FontAwesomeIcon icon={faNewspaper} /><b className="mx-1">BERITA</b>
          </a>
      </li>

      <li className="nav-item ms-1">
          <a className="nav-link tab" id="layanan-tab" data-bs-toggle="tab" href="#layanan" role="tab" aria-controls="layanan" aria-selected="false">
            <FontAwesomeIcon icon={faPersonChalkboard} /><b className="mx-1">LAYANAN</b>
          </a>
      </li>
      <li className="nav-item ms-1">
          <a className="nav-link tab" id="pengumuman-tab" data-bs-toggle="tab" href="#pengumuman" role="tab" aria-controls="pengumuman" aria-selected="false">
            <FontAwesomeIcon icon={faBullhorn} /><b className="mx-1">PENGUMUMAN</b>
          </a>
      </li>
      <li className="nav-item">
          <a className="nav-link tab" id="agenda-tab" data-bs-toggle="tab" href="#agenda" role="tab" aria-controls="agenda" aria-selected="false">
            <FontAwesomeIcon icon={faCalendarDays} /><b className="mx-1">AGENDA</b>
          </a>
      </li>
      <li className="nav-item">
          <a className="nav-link tab" id="bankdata-tab" data-bs-toggle="tab" href="#bankdata" role="tab" aria-controls="bankdata" aria-selected="false">
            <FontAwesomeIcon icon={faDatabase} /><b className="mx-1">BANK DATA</b>
          </a>
      </li>
    </ul>
  );
}

function ListBerita() {
  return (
    <div className="tab-pane fade active show" id="berita" role="tabpanel" aria-labelledby="berita-tab">
        <div className="row mt-4">
          <Berita gambar="https://bpbd.cirebonkab.go.id/public/img/informasi/berita/1650512661_9f9dd20cf5b7ab2e529e.jpg" tanggal="21 April 2022" dilihat="1298 kali" folderUrl="https://bpbd.cirebonkab.go.id/berita/kategori/Kejadian-Bencana" folder="Kejadian Bencana" urlBerita="https://bpbd.cirebonkab.go.id/berita/detail/banjir-kepung-sejumlah-wilayah-plumbon-dan-depok-pada-rabu-malam" judul="Banjir Kepung Sejumlah Wilayah Plumbon dan Depok pada Rabu Malam" />
          <Berita gambar="https://bpbd.cirebonkab.go.id/public/img/informasi/berita/1650463995_263abf8cfd13dd84da31.jpg" tanggal="20 April 2022" dilihat="720 kali" folderUrl="https://bpbd.cirebonkab.go.id/berita/kategori/Kejadian-Bencana" folder="Kejadian Bencana" urlBerita="https://bpbd.cirebonkab.go.id/berita/detail/update-terkini-kejadian-hujan-disertai-angin-kencang-di-desa-lurah-kecamatan-plumbon" judul="Update Terkini Kejadian Hujan Disertai Angin Kencang di Desa Lurah Kecamatan Plumbon" />
          <Berita gambar="https://bpbd.cirebonkab.go.id/public/img/informasi/berita/1650432019_a5425e32a9d2f793f6c6.jpg" tanggal="20 April 2022" dilihat="623 kali" folderUrl="https://bpbd.cirebonkab.go.id/berita/kategori/Kejadian-Bencana" folder="Kejadian Bencana" urlBerita="https://bpbd.cirebonkab.go.id/berita/detail/puluhan-rumah-terdampak-hujan-disertai-angin-kencang-di-desa-lurah-kecamatan-plumbon" judul="Puluhan Rumah Terdampak Hujan Disertai Angin Kencang di Desa Lurah Kecamatan Plumbon" />
          <Berita gambar="https://bpbd.cirebonkab.go.id/public/img/informasi/berita/1649412165_31d18d2c84582856a84a.jpg" tanggal="08 April 2022" dilihat="1265 kali" folderUrl="https://bpbd.cirebonkab.go.id/berita/kategori/Himbauan" folder="Himbauan" urlBerita="https://bpbd.cirebonkab.go.id/berita/detail/edukasi-bencana-melalui-film-pendek-siap-dalam-bencana-karya-siswa-smpn-i-sumber" judul="EDUKASI BENCANA MELALUI FILM PENDEK “SIAP DALAM BENCANA” KARYA SISWA SMPN I SUMBER" />
          <Berita gambar="https://bpbd.cirebonkab.go.id/public/img/informasi/berita/1648209274_d1707b2cd8d700fb5909.jpg" tanggal="25 Maret 2022" dilihat="1837 kali" folderUrl="https://bpbd.cirebonkab.go.id/berita/kategori/Kegiatan-BPBD" folder="Kegiatan BPBD" urlBerita="https://bpbd.cirebonkab.go.id/berita/detail/bpbd-kabupaten-cirebon-gelar-pelatihan-manajemen-simulasi-kedaruratan-bencana" judul="BPBD KABUPATEN CIREBON GELAR PELATIHAN MANAJEMEN SIMULASI KEDARURATAN BENCANA" />
          <Berita gambar="https://bpbd.cirebonkab.go.id/public/img/informasi/berita/1647748640_3c323143fc58b2591505.jpg" tanggal="20 Maret 2022" dilihat="1043 kali" folderUrl="https://bpbd.cirebonkab.go.id/berita/kategori/Kejadian-Bencana" folder="Kejadian Bencana" urlBerita="https://bpbd.cirebonkab.go.id/berita/detail/hujan-disertai-angin-kencang-rusak-bangunan-usaha-di-kecamatan-lemahabang" judul="HUJAN DISERTAI ANGIN KENCANG RUSAK BANGUNAN USAHA DI KECAMATAN LEMAHABANG" />
          <div className="col-md-12 text-center mt-3">
              <a href="https://bpbd.cirebonkab.go.id/berita" className="btn btn-primary">Lihat Semua Berita <FontAwesomeIcon icon={faArrowRight}/></a>
          </div>
        </div>
    </div>
  );
}

function ListDatabank() {
  return (
    <div className="tab-pane fade" id="bankdata" role="tabpanel" aria-labelledby="bankdata-tab">
        <div className="row mt-4">
            <div className="col-md-12">
                <Databank download="https://bpbd.cirebonkab.go.id/public/unduh/bankdata/1710402360_4cd441cdb51eed8955cb.docx" onclick="updatehits('21')" name="RENSTRA" tanggal="14 Maret 2024" didownload="3 kali" />
                <Databank download="https://bpbd.cirebonkab.go.id/public/unduh/bankdata/1710401874_7d013a8b29dd41390de4.docx" onclick="updatehits('20')" name="RENJA PERUBAHAN 2023" tanggal="14 Maret 2024" didownload="1 kali" />
                <Databank download="https://bpbd.cirebonkab.go.id/public/unduh/bankdata/1710401837_03fe2adc329139f14c41.pdf" onclick="updatehits('19')" name="PERKIN PERUBAHAN 2023" tanggal="14 Maret 2024" didownload="1 kali" />
                <Databank download="https://bpbd.cirebonkab.go.id/public/unduh/bankdata/1710401729_48c76be4db933c22fa36.pdf" onclick="updatehits('18')" name="LAKIP 2023" tanggal="14 Maret 2024" didownload="3 kali" />
                <Databank download="https://bpbd.cirebonkab.go.id/public/unduh/bankdata/1710401532_5cd9eb90b9818cf1e3da.docx" onclick="updatehits('17')" name="IKU RUBAHAN 2023" tanggal="14 Maret 2024" didownload="1 kali" />
                <Databank download="https://bpbd.cirebonkab.go.id/public/unduh/bankdata/1677934978_f3f501096a68508ce37c.pdf" onclick="updatehits('16')" name="LAKIP 2022" tanggal="04 Maret 2023" didownload="4 kali" />
            </div>
            <div className="col-md-12 text-center mt-3">
                <a href="https://bpbd.cirebonkab.go.id/bankdata" className="btn btn-primary">Lihat Semua Data<i className="mdi mdi-arrow-right ml-1"></i></a>
            </div>
        </div>
    </div>
  );
}

function LinkTerkait() {
  return (
    <div class="card">
        <div class="card-body">
            <div class="title-konten text-center text-uppercase font-size-15 mb-3">Link Terkait</div>
            <div class="table-responsive table-hover">
                <table class="table table-centered">
                    <tbody>
                        <tr>
                            <th scope="row"><a href="https://inarisk.bnpb.go.id/" target="_blank">INARISK BNPB </a></th>
                            <td class="p-1">
                                <a href="https://inarisk.bnpb.go.id/" target="_blank"><img class="img-circle elevation-2" width="50" src="https://bpbd.cirebonkab.go.id/public/img/linkterkait/1646726657_07eba991ac331b811e4b.jpeg" alt="Sampul Link"/></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="http://stamet.majalengka.bmkg.go.id" target="_blank">BMKG KERTAJATI </a></th>
                            <td class="p-1">
                                <a href="http://stamet.majalengka.bmkg.go.id" target="_blank"><img class="img-circle elevation-2" width="50" src="https://bpbd.cirebonkab.go.id/public/img/linkterkait/1646726781_128202648df97b3d27a9.jpg" alt="Sampul Link"/></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="https://www.cirebonkab.go.id/" target="_blank">PEMERINTAH DAERAH KABUPATEN CIREBON </a></th>
                            <td class="p-1">
                                <a href="https://www.cirebonkab.go.id/" target="_blank"><img class="img-circle elevation-2" width="50" src="https://bpbd.cirebonkab.go.id/public/img/linkterkait/1646726897_a85f17fde86d2308d72b.gif" alt="Sampul Link"/></a>
                            </td>
                        </tr>
                                                                        <tr>
                            <th scope="row"><a href="https://dibi.bnpb.go.id/" target="_blank">DATA INFORMASI BENCANA INDONESIA </a></th>
                            <td class="p-1">
                                <a href="https://dibi.bnpb.go.id/" target="_blank"><img class="img-circle elevation-2" width="50" src="https://bpbd.cirebonkab.go.id/public/img/linkterkait/1646727125_99cf70708c30de863015.jpg" alt="Sampul Link"/></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#modalViewlink" data-backdrop="static">
                        Lihat Semua Link Terkait <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

function Deskripsi(props) {
  return <p className="MsoNormal">{props.deskripsi}</p>
}

function Databank(props) {
  return (
    <div className="list-group mt-2">
        <a target="_BLANK" href={props.download} className="list-group-item list-group-item-action" onclick={props.onclick}>
            <div className="row no-gutters pointer">
                <div className="media">
                    <i className="fa fa-database float-left pr-3 list-icon mt-2"></i>
                    <div className="media-body">
                        <div className="list-judul">{props.name}</div>
                        <div className="list-posted">
                            <i className="far fa-calendar-alt"></i> {props.tanggal} |
                            <i className="far fa-eye ms-1"></i> {props.didownload}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
  );
}

function Tab(props) {
  return (
    <div className="tab-pane fade" id={props.id} role="tabpanel" aria-labelledby={props.tab}>
        <div className="row mt-4">
            <div className="col-md-12"></div>
            <div className="col-md-12 text-center mt-3">
                <a href={props.url} className="btn btn-primary">{props.name} <FontAwesomeIcon icon={faArrowRight}/></a>
            </div>
        </div>
    </div>
  );
}

function Berita(props) {
  return (
    <div className="col-md-4 col-lg-4 col-12 col-sampul">
        <div className="row">
            <div className="col-md-12 col-4 col-gambar">
                <div className="wraper-img-new">
                    <img className="wraper-img-new" src={props.gambar} />
                </div>
            </div>
            <div className=" col-md-12 col-8 col-isi">
                <div className="posted-new">
                    <i className="far fa-calendar-alt mx-1"></i> {props.tanggal} |
                    <i className="far fa-eye mx-1"></i> {props.dilihat} |
                    <i className="fas fa-folder-open mx-1"></i><a href={props.folderUrl}> {props.folder}</a>
                </div>
                <a className="judul-berita-new" href={props.urlBerita}>
                    <div>{props.judul}</div>
                </a>
            </div>
        </div>
    </div>
  );
}

export default App;