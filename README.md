b28595adb7228293a4080a7f21ba21e78d1cd758ef3278f9db226c1edc322611
uname -r ---  5.10.198-g232b494617d8
cat /proc/version  ----- inux version 5.10.198-g232b494617d8 (hw@hw-Default-string) (aarch64-none-linux-gnu-gcc (GNU Toolchain for the A-profile Architecture 10.3-2021.07 (arm-10.29)) 10.3.1 20210621, GNU ld (GNU Toolchain for the A-profile Architecture 10.3-2021.07 (arm-10.29)) 2.36.1.20210621) #63 SMP Wed Aug 13 14:55:28 CST 2025

sudo apt-get update
sudo apt-get install -y build-essential bc flex bison libssl-dev libelf-dev dwarves pkg-config git
https://download.nomachine.com/download/?id=28&platform=linux&distro=arm

wget https://download.nomachine.com/download/8.12/Linux/nomachine_8.12.3_1_arm64.deb
sudo apt install ./nomachine_*.deb

ing file: /usr/NX/share/documents/node/cups-info

  CUPS Printing Backend

  The  NoMachine Node  setup procedure could not detect your
  CUPS installation: either  CUPS  is not installed on  your
  system or it was installed in a non-standard path. CUPS is
  needed  in order to  enable  printing  support  in your NX
  system.
  Please note that you can enable  printing support for your
  NX system at any time; to do this make sure  that you have
  CUPS installed then run:

    /usr/NX/scripts/setup/nxnode --printingsetup <pathname>

  to specify the location of the CUPS root path.

NX> 700 Node install completed with warnings.
NX> 700 Please review the install log for details.
NX> 700 Installing nxserver version: 9.1.24.
NX> 700 Installing nxwebplayer version: 9.1.24.
NX> 700 Installation completed at: Mon, 25 Aug 2025 17:45:20.
NX> 700 NoMachine was configured to run the following services:
NX> 700 NX service on port: 4000
NX> 700 HTTPS service on port: 4443
user@user:~/Downloads$ ip addr show
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: can0: <NOARP,ECHO> mtu 16 qdisc noop state DOWN group default qlen 10
    link/can 
3: can1: <NOARP,ECHO> mtu 16 qdisc noop state DOWN group default qlen 10
    link/can 
4: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 50:0a:52:06:84:b0 brd ff:ff:ff:ff:ff:ff
    inet 10.0.0.232/24 brd 10.0.0.255 scope global dynamic noprefixroute eth0
       valid_lft 83113sec preferred_lft 83113sec
    inet6 fe80::ad82:8b03:5829:31be/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
5: eth1: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether 50:0a:52:06:84:b1 brd ff:ff:ff:ff:ff:ff
6: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state DORMANT group default qlen 1000
    link/ether c0:bf:be:16:8f:ad brd ff:ff:ff:ff:ff:ff
user@user:~/Downloads$ sudo /usr/NX/bin/nxserver --status
NX> 111 New connections to NoMachine server are enabled.
NX> 161 Enabled service: nxserver.
NX> 161 Enabled service: nxnode.
NX> 161 Enabled service: nxd.
NX> 161 Enabled service: nxhtd.
user@user:~/Downloads$ sudo /usr/NX/bin/nxserver --startup
NX> 111 New connections to NoMachine server are enabled.
NX> 161 Service: nxserver already running.
NX> 161 Service: nxnode already running.
NX> 161 Service: nxd already running.
NX> 161 Service: nxhtd already running.
user@user:~/Downloads$ sudo /usr/NX/bin/nxserver --restart
NX> 162 Disabled service: nxd.
NX> 162 Disabled service: nxserver.
NX> 162 Disabled service: nxnode.
NX> 162 Disabled service: nxhtd.
NX> 111 New connections to NoMachine server are enabled.
NX> 161 Enabled service: nxserver.
NX> 161 Enabled service: nxnode.
NX> 161 Enabled service: nxd.
NX> 161 Enabled service: nxhtd.





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

