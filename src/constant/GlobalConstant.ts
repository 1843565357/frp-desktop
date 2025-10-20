class GlobalConstant {
  public static ZIP_EXT = ".zip";
  public static TOML_EXT = ".toml";
  public static GZ_EXT = ".gz";
  public static TAR_GZ_EXT = ".tar.gz";
  public static LOCAL_IP = "127.0.0.1";
  public static FRPC_LOGIN_FAIL_EXIT = false;
  public static INTERNET_CHECK_URL = "https://jwinks.com";
  public static INTERNET_CHECK_TIMEOUT = 10;
  public static DEFAULT_LANGUAGE = "en-US";
  public static FRP_ARCH_VERSION_MAPPING = {
    // ========== Windows ==========
    windows_x86_64: ["windows", "amd64"],
    windows_aarch64: ["windows", "arm64"],
    windows_i686: ["windows", "386"],
    windows_x86: ["windows", "386"],

    // ========== macOS (Darwin) ==========
    macos_x86_64: ["darwin", "amd64"],
    macos_aarch64: ["darwin", "arm64"],
    darwin_x86_64: ["darwin", "amd64"],
    darwin_aarch64: ["darwin", "arm64"],

    // ========== Linux 常见架构 ==========
    linux_x86_64: ["linux", "amd64"],
    linux_aarch64: ["linux", "arm64"],
    linux_i686: ["linux", "386"],
    linux_armv7: ["linux", "arm"],
    linux_armv7l: ["linux", "arm"],
    linux_armv6l: ["linux", "armv6"],

    // ========== Linux 其他架构 ==========
    linux_mips: ["linux", "mips"],
    linux_mipsle: ["linux", "mipsle"],
    linux_mips64: ["linux", "mips64"],
    linux_mips64le: ["linux", "mips64le"],
    linux_mips64el: ["linux", "mips64le"],
    linux_mipsel: ["linux", "mipsle"],
    linux_s390x: ["linux", "s390x"],
    linux_ppc64le: ["linux", "ppc64le"],
    linux_riscv64: ["linux", "riscv64"],
    linux_loongarch64: ["linux", "loong64"],

    // ========== FreeBSD ==========
    freebsd_x86_64: ["freebsd", "amd64"],
    freebsd_aarch64: ["freebsd", "arm64"],
    freebsd_i686: ["freebsd", "386"],
    freebsd_arm: ["freebsd", "arm"],

    // ========== OpenBSD ==========
    openbsd_x86_64: ["openbsd", "amd64"],
    openbsd_i686: ["openbsd", "386"],
    openbsd_aarch64: ["openbsd", "arm64"],

    // ========== NetBSD ==========
    netbsd_x86_64: ["netbsd", "amd64"],
    netbsd_i686: ["netbsd", "386"],
    netbsd_aarch64: ["netbsd", "arm64"],
  };

  public static FRPC_PROCESS_STATUS_CHECK_INTERVAL = 1;
}

export default GlobalConstant;
