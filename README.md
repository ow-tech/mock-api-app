uname -r ---  5.10.198-g232b494617d8
cat /proc/version  ----- inux version 5.10.198-g232b494617d8 (hw@hw-Default-string) (aarch64-none-linux-gnu-gcc (GNU Toolchain for the A-profile Architecture 10.3-2021.07 (arm-10.29)) 10.3.1 20210621, GNU ld (GNU Toolchain for the A-profile Architecture 10.3-2021.07 (arm-10.29)) 2.36.1.20210621) #63 SMP Wed Aug 13 14:55:28 CST 2025

sudo apt-get update
sudo apt-get install -y build-essential bc flex bison libssl-dev libelf-dev dwarves pkg-config git
sudo apt-get install -y build-essential bc flex bison libssl-dev libelf-dev dwarves pkg-config git
Reading package lists... Done
Building dependency tree       
Reading state information... Done
bc is already the newest version (1.07.1-2build1).
bc set to manually installed.
pkg-config is already the newest version (0.29.1-0ubuntu4).
build-essential is already the newest version (12.8ubuntu1.1).
The following additional packages will be installed:
  git-man libdw1 liberror-perl libfl-dev libfl2 libsigsegv2 libssl1.1 m4
Suggested packages:
  bison-doc flex-doc git-daemon-run | git-daemon-sysvinit git-doc git-el
  git-email git-gui gitk gitweb git-cvs git-mediawiki git-svn libssl-doc
  m4-doc
The following NEW packages will be installed:
  bison dwarves flex git git-man libdw1 libelf-dev liberror-perl libfl-dev
  libfl2 libsigsegv2 libssl-dev m4
The following packages will be upgraded:
  libssl1.1
1 upgraded, 13 newly installed, 0 to remove and 96 not upgraded.
Need to get 9,787 kB of archives.
After this operation, 53.8 MB of additional disk space will be used.
Get:1 http://mirrors.ustc.edu.cn/ubuntu-ports focal/main arm64 libsigsegv2 arm64 2.12-2 [13.3 kB]
Get:2 http://mirrors.ustc.edu.cn/ubuntu-ports focal/main arm64 m4 arm64 1.4.18-4 [194 kB]
Get:3 http://mirrors.ustc.edu.cn/ubuntu-ports focal/main arm64 flex arm64 2.6.4-6.2 [307 kB]
Get:4 http://mirrors.ustc.edu.cn/ubuntu-ports focal-updates/main arm64 libssl1.1 arm64 1.1.1f-1ubuntu2.24 [1,159 kB]
Get:5 http://mirrors.ustc.edu.cn/ubuntu-ports focal/main arm64 bison arm64 2:3.5.1+dfsg-1 [640 kB]
Get:6 http://mirrors.ustc.edu.cn/ubuntu-ports focal/main arm64 liberror-perl all 0.17029-1 [26.5 kB]
Get:7 http://mirrors.ustc.edu.cn/ubuntu-ports focal-updates/main arm64 git-man all 1:2.25.1-1ubuntu3.14 [887 kB]
Get:8 http://mirrors.ustc.edu.cn/ubuntu-ports focal-updates/main arm64 git arm64 1:2.25.1-1ubuntu3.14 [4,460 kB]
Get:9 http://mirrors.ustc.edu.cn/ubuntu-ports focal-updates/main arm64 libdw1 arm64 0.176-1.1ubuntu0.1 [213 kB]
Get:10 http://mirrors.ustc.edu.cn/ubuntu-ports focal-updates/main arm64 libelf-dev arm64 0.176-1.1ubuntu0.1 [58.9 kB]
Get:11 http://mirrors.ustc.edu.cn/ubuntu-ports focal/main arm64 libfl2 arm64 2.6.4-6.2 [11.4 kB]
Get:12 http://mirrors.ustc.edu.cn/ubuntu-ports focal/main arm64 libfl-dev arm64 2.6.4-6.2 [6,324 B]
Get:13 http://mirrors.ustc.edu.cn/ubuntu-ports focal-updates/main arm64 libssl-dev arm64 1.1.1f-1ubuntu2.24 [1,462 kB]
Get:14 http://mirrors.ustc.edu.cn/ubuntu-ports focal-updates/universe arm64 dwarves arm64 1.21-0ubuntu1~20.04.1 [350 kB]
Fetched 9,787 kB in 3s (2,839 kB/s)
Preconfiguring packages ...
Selecting previously unselected package libsigsegv2:arm64.
(Reading database ... 123882 files and directories currently installed.)
Preparing to unpack .../00-libsigsegv2_2.12-2_arm64.deb ...
Unpacking libsigsegv2:arm64 (2.12-2) ...
Selecting previously unselected package m4.
Preparing to unpack .../01-m4_1.4.18-4_arm64.deb ...
Unpacking m4 (1.4.18-4) ...
Selecting previously unselected package flex.
Preparing to unpack .../02-flex_2.6.4-6.2_arm64.deb ...
Unpacking flex (2.6.4-6.2) ...
Preparing to unpack .../03-libssl1.1_1.1.1f-1ubuntu2.24_arm64.deb ...
Unpacking libssl1.1:arm64 (1.1.1f-1ubuntu2.24) over (1.1.1f-1ubuntu2.23) ...
Selecting previously unselected package bison.
Preparing to unpack .../04-bison_2%3a3.5.1+dfsg-1_arm64.deb ...
Unpacking bison (2:3.5.1+dfsg-1) ...
Selecting previously unselected package liberror-perl.
Preparing to unpack .../05-liberror-perl_0.17029-1_all.deb ...
Unpacking liberror-perl (0.17029-1) ...
Selecting previously unselected package git-man.
Preparing to unpack .../06-git-man_1%3a2.25.1-1ubuntu3.14_all.deb ...
Unpacking git-man (1:2.25.1-1ubuntu3.14) ...
Selecting previously unselected package git.
Preparing to unpack .../07-git_1%3a2.25.1-1ubuntu3.14_arm64.deb ...
Unpacking git (1:2.25.1-1ubuntu3.14) ...
Selecting previously unselected package libdw1:arm64.
Preparing to unpack .../08-libdw1_0.176-1.1ubuntu0.1_arm64.deb ...
Unpacking libdw1:arm64 (0.176-1.1ubuntu0.1) ...
Selecting previously unselected package libelf-dev:arm64.
Preparing to unpack .../09-libelf-dev_0.176-1.1ubuntu0.1_arm64.deb ...
Unpacking libelf-dev:arm64 (0.176-1.1ubuntu0.1) ...
Selecting previously unselected package libfl2:arm64.
Preparing to unpack .../10-libfl2_2.6.4-6.2_arm64.deb ...
Unpacking libfl2:arm64 (2.6.4-6.2) ...
Selecting previously unselected package libfl-dev:arm64.
Preparing to unpack .../11-libfl-dev_2.6.4-6.2_arm64.deb ...
Unpacking libfl-dev:arm64 (2.6.4-6.2) ...
Selecting previously unselected package libssl-dev:arm64.
Preparing to unpack .../12-libssl-dev_1.1.1f-1ubuntu2.24_arm64.deb ...
Unpacking libssl-dev:arm64 (1.1.1f-1ubuntu2.24) ...
Selecting previously unselected package dwarves.
Preparing to unpack .../13-dwarves_1.21-0ubuntu1~20.04.1_arm64.deb ...
Unpacking dwarves (1.21-0ubuntu1~20.04.1) ...
Setting up libdw1:arm64 (0.176-1.1ubuntu0.1) ...
Setting up libssl1.1:arm64 (1.1.1f-1ubuntu2.24) ...
Setting up liberror-perl (0.17029-1) ...
Setting up libsigsegv2:arm64 (2.12-2) ...
Setting up libssl-dev:arm64 (1.1.1f-1ubuntu2.24) ...
Setting up libelf-dev:arm64 (0.176-1.1ubuntu0.1) ...
Setting up libfl2:arm64 (2.6.4-6.2) ...
Setting up dwarves (1.21-0ubuntu1~20.04.1) ...
Setting up git-man (1:2.25.1-1ubuntu3.14) ...
Setting up m4 (1.4.18-4) ...
Setting up git (1:2.25.1-1ubuntu3.14) ...
Setting up bison (2:3.5.1+dfsg-1) ...
update-alternatives: using /usr/bin/bison.yacc to provide /usr/bin/yacc (yacc) in auto mode
update-alternatives: warning: skip creation of /usr/share/man/man1/yacc.1.gz because associated file /usr/share/man/man1/bison.yacc.1.gz (of link group yacc) doesn't exist
Setting up flex (2.6.4-6.2) ...
Setting up libfl-dev:arm64 (2.6.4-6.2) ...
Processing triggers for libc-bin (2.31-0ubuntu9.16) ...
Processing triggers for doc-base (0.10.9) ...
Processing 29 changed doc-base files, 1 added doc-base file...
Error in `/usr/share/doc-base/pnm2ppa-color', line 17: all `Format' sections are invalid.
Error in `/usr/share/doc-base/mdadm-faq', line 9: all `Format' sections are invalid.
Error in `/usr/share/doc-base/mdadm-readme-recipes', line 9: all `Format' sections are invalid.
Error in `/usr/share/doc-base/users-and-groups', line 13: all `Format' sections are invalid.
Error in `/usr/share/doc-base/fcitx-tables', line 13: all `Format' sections are invalid.
Error in `/usr/share/doc-base/fio', line 9: all `Format' sections are invalid.
Error in `/usr/share/doc-base/install-docs-man', line 11: all `Format' sections are invalid.
Error in `/usr/share/doc-base/ocl-icd-libopencl1', line 11: all `Format' sections are invalid.
Error in `/usr/share/doc-base/gdisk', line 9: all `Format' sections are invalid.
Error in `/usr/share/doc-base/pnm2ppa-calibrate', line 16: all `Format' sections are invalid.
Error in `/usr/share/doc-base/libxml-parser-perl', line 10: all `Format' sections are invalid.
Error in `/usr/share/doc-base/cracklib-runtime', line 11: all `Format' sections are invalid.
Error in `/usr/share/doc-base/libcrack2', line 13: all `Format' sections are invalid.
Error in `/usr/share/doc-base/fcitx-pinyin', line 8: all `Format' sections are invalid.
Error in `/usr/share/doc-base/packet-filter', line 10: all `Format' sections are invalid.
Error in `/usr/share/doc-base/fontconfig-user', line 17: all `Format' sections are invalid.
Error in `/usr/share/doc-base/xterm-faq', line 14: all `Format' sections are invalid.
Error in `/usr/share/doc-base/nat', line 11: all `Format' sections are invalid.
Error in `/usr/share/doc-base/libpng16', line 25: all `Format' sections are invalid.
Error in `/usr/share/doc-base/p7zip-full', line 17: all `Format' sections are invalid.
Error in `/usr/share/doc-base/bc', line 17: all `Format' sections are invalid.
Error in `/usr/share/doc-base/doc-base', line 13: all `Format' sections are invalid.
Error in `/usr/share/doc-base/shared-mime-info', line 12: all `Format' sections are invalid.
Error in `/usr/share/doc-base/kbd-font-formats', line 10: all `Format' sections are invalid.
Error in `/usr/share/doc-base/pnm2ppa-ppa-networking', line 20: all `Format' sections are invalid.
Error in `/usr/share/doc-base/xterm-ctlseqs', line 9: all `Format' sections are invalid.
Error in `/usr/share/doc-base/conky-manual', line 9: all `Format' sections are invalid.
Error in `/usr/share/doc-base/iperf', line 10: all `Format' sections are invalid.
Note: `install-docs --verbose --check file_name' may give more details about the above errors.
user@user:~$ 






____ ----- 


cd ~
git clone <firefly-kernel-repo-url> rk356x-kernel-5.10
cd rk356x-kernel-5.10
# Example (replace with the exact commit/branch that matches your uname -r)
git checkout 232b494617d8


cd ~/rk356x-kernel-5.10
cp /boot/config-$(uname -r) .config
yes "" | make olddefconfig



# It should print: CONFIG_LOCALVERSION="-g232b494617d8"
grep CONFIG_LOCALVERSION .config || true



./scripts/config --set-str CONFIG_LOCALVERSION "-g232b494617d8"
yes "" | make olddefconfig

./scripts/config --module CONFIG_TUN
yes "" | make olddefconfig


# If your kernel was built with clang, add LLVM=1 to the following make commands.
make modules_prepare


zcat /proc/config.gz 2>/dev/null | grep CONFIG_MODVERSIONS || grep CONFIG_MODVERSIONS /boot/config-$(uname -r)



# GCC build
make -j"$(nproc)" M=drivers/net modules
# If clang was used for the kernel:
# make -j"$(nproc)" LLVM=1 M=drivers/net modules




sudo mkdir -p /lib/modules/$(uname -r)/kernel/drivers/net
sudo cp drivers/net/tun.ko /lib/modules/$(uname -r)/kernel/drivers/net/
sudo depmod -a

# Try to load it
sudo modprobe tun



# Mock API App - Local Setup Guide

## Prerequisites
Ensure you have the following installed before proceeding:
- **Node.js** v18.20.6 (for compatibility with dependencies)
- **npm** (comes with Node.js)
- A code editor of your choice (e.g., VS Code, WebStorm)

## Installation Steps

1. **Clone the Repository**
   ```sh
   git clone https://github.com/ow-tech/mock-api-app.git
   ```

2. **Navigate to the Project Directory**
   ```sh
   cd mock-api-app
   ```

3. **Open in Your Preferred Code Editor**
   
   Example: If using VS Code, run:
   ```sh
   code .
   ```

4. **Install Dependencies**
   While in the root directory, open the terminal and run:
   ```sh
   npm install
   ```

## Running the Application

To start the development server, run:
```sh
npm start
```

The application should now be running at `http://localhost:3000/`.

## Technologies Used
- **React** v18.2.0
- **Tailwind CSS** v3.4.17
- **TypeScript**
- **Node.js** v18.20.6

## Application Features and Requirements

### Setup:
- Created using **Create React App** with TypeScript.
- Integrated **Tailwind CSS** for styling.

### Mock API:
- Uses **JSONPlaceholder** (https://jsonplaceholder.typicode.com/) for simulating server interactions.
- Implements endpoints for fetching, creating, updating, and deleting items.

### Component Structure:
- Displays a list of items.
- Each item contains a **title** and **description**.
- Includes a form for adding new items.

### Functionality:
- Fetches and displays item lists from the mock API.
- Supports adding new items and updating the UI accordingly.
- Allows users to delete items.
- Implements basic error handling for API calls.
- - Editing existing item titles or descriptions.
- sorting for the item list.

### Styling:
- Uses **Tailwind CSS** for styling components.
- Ensures a **responsive design** for both desktop and mobile devices.

### Deployment:
- The application is deployed on **Vercel**
- Deployed Application URL: **[https://mock-api-app-git-develop-ow-techs-projects.vercel.app]**



## Additional Notes
- If you encounter any issues, ensure you have the correct Node.js version installed.
- Tailwind CSS version 3.4.17 is used for stability.
- Modify the `package.json` scripts if needed for custom configurations.

Enjoy developing! 🚀

