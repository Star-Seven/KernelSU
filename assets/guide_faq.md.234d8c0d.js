import{_ as e,o,c as a,O as t}from"./chunks/framework.43781440.js";const m=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"guide/faq.md","filePath":"guide/faq.md"}'),r={name:"guide/faq.md"},n=t('<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="does-kernelsu-support-my-device" tabindex="-1">Does KernelSU support my device? <a class="header-anchor" href="#does-kernelsu-support-my-device" aria-label="Permalink to &quot;Does KernelSU support my device?&quot;">​</a></h2><p>First, your devices should be able to unlock the bootloader. If it can&#39;t, then it is unsupported.</p><p>Then install KernelSU manager App to your device and open it, if it shows <code>Unsupported</code> then your device cannot be supported out of box, but you can build kernel source and integrate KernelSU to make it work or using <a href="./unofficially-support-devices.html">unofficially-support-devices</a>.</p><h2 id="does-kernelsu-need-to-unlock-bootloader" tabindex="-1">Does KernelSU need to unlock Bootloader? <a class="header-anchor" href="#does-kernelsu-need-to-unlock-bootloader" aria-label="Permalink to &quot;Does KernelSU need to unlock Bootloader?&quot;">​</a></h2><p>Certainly, yes.</p><h2 id="does-kernelsu-support-modules" tabindex="-1">Does KernelSU support modules? <a class="header-anchor" href="#does-kernelsu-support-modules" aria-label="Permalink to &quot;Does KernelSU support modules?&quot;">​</a></h2><p>Yes, But it is in early version, it may be buggy. Please wait for it to be stable 😃</p><h2 id="does-kernelsu-support-xposed" tabindex="-1">Does KernelSU support Xposed? <a class="header-anchor" href="#does-kernelsu-support-xposed" aria-label="Permalink to &quot;Does KernelSU support Xposed?&quot;">​</a></h2><p>Yes, <a href="https://github.com/canyie/Dreamland" target="_blank" rel="noreferrer">Dreamland</a> and <a href="https://taichi.cool" target="_blank" rel="noreferrer">TaiChi</a> work now. For LSPosed, you can make it work by <a href="https://github.com/Dr-TSNG/ZygiskNext" target="_blank" rel="noreferrer">ZygiskNext</a></p><h2 id="does-kernelsu-support-zygisk" tabindex="-1">Does KernelSU support Zygisk? <a class="header-anchor" href="#does-kernelsu-support-zygisk" aria-label="Permalink to &quot;Does KernelSU support Zygisk?&quot;">​</a></h2><p>KernelSU has no builtin Zygisk support, but you can use <a href="https://github.com/Dr-TSNG/ZygiskNext" target="_blank" rel="noreferrer">ZygiskNext</a> instead.</p><h2 id="is-kernelsu-compatible-with-magisk" tabindex="-1">Is KernelSU compatible with Magisk? <a class="header-anchor" href="#is-kernelsu-compatible-with-magisk" aria-label="Permalink to &quot;Is KernelSU compatible with Magisk?&quot;">​</a></h2><p>KernelSU&#39;s module system is conflict with Magisk&#39;s magic mount, if there is any module enabled in KernelSU, then the whole Magisk would not work.</p><p>But if you only use the <code>su</code> of KernelSU, then it will work well with Magisk: KernelSU modify the <code>kernel</code> and Magisk modify the <code>ramdisk</code>, they can work together.</p><h2 id="will-kernelsu-substitute-magisk" tabindex="-1">Will KernelSU substitute Magisk? <a class="header-anchor" href="#will-kernelsu-substitute-magisk" aria-label="Permalink to &quot;Will KernelSU substitute Magisk?&quot;">​</a></h2><p>We don&#39;t think so and it&#39;s not our goal. Magisk is good enough for userspace root solution and it will live long. KernelSU&#39;s goal is to provide a kernel interface to users, not substituting Magisk.</p><h2 id="can-kernelsu-support-non-gki-devices" tabindex="-1">Can KernelSU support non GKI devices? <a class="header-anchor" href="#can-kernelsu-support-non-gki-devices" aria-label="Permalink to &quot;Can KernelSU support non GKI devices?&quot;">​</a></h2><p>It is possible. But you should download the kernel source and intergrate KernelSU to the source tree and compile the kernel yourself.</p><h2 id="can-kernelsu-support-devices-below-android-12" tabindex="-1">Can KernelSU support devices below Android 12? <a class="header-anchor" href="#can-kernelsu-support-devices-below-android-12" aria-label="Permalink to &quot;Can KernelSU support devices below Android 12?&quot;">​</a></h2><p>It is device&#39;s kernel that affect KernelSU&#39;s compatability and it has nothing to do with Android version.The only restriction is that devices launched with Android 12 must be kernel 5.10+(GKI devices). So:</p><ol><li>Devices launched with Android 12 must be supported.</li><li>Devices with has an old kernel (Some Android 12 devices is also old kernel) is compatable (You should build kernel yourself)</li></ol><h2 id="can-kernelsu-support-old-kernel" tabindex="-1">Can KernelSU support old kernel? <a class="header-anchor" href="#can-kernelsu-support-old-kernel" aria-label="Permalink to &quot;Can KernelSU support old kernel?&quot;">​</a></h2><p>It is possible, KernelSU is backported to kernel 4.14 now, for older kernel, you need to backport it manully and PRs welcome!</p><h2 id="how-to-integrate-kernelsu-for-old-kernel" tabindex="-1">How to integrate KernelSU for old kernel? <a class="header-anchor" href="#how-to-integrate-kernelsu-for-old-kernel" aria-label="Permalink to &quot;How to integrate KernelSU for old kernel?&quot;">​</a></h2><p>Please refer <a href="./how-to-integrate-for-non-gki.html">guide</a></p><h2 id="why-my-android-version-is-13-and-the-kernel-shows-android12-5-10" tabindex="-1">Why my Android version is 13, and the kernel shows &quot;android12-5.10&quot;? <a class="header-anchor" href="#why-my-android-version-is-13-and-the-kernel-shows-android12-5-10" aria-label="Permalink to &quot;Why my Android version is 13, and the kernel shows &quot;android12-5.10&quot;?&quot;">​</a></h2><p>The Kernel version has nothing to do with Android version, if you need to flash kernel, always use the kernel version, Android version is not so important.</p><h2 id="is-there-any-mount-master-global-mount-namespace-in-kernelsu" tabindex="-1">Is there any --mount-master/global mount namespace in KernelSU? <a class="header-anchor" href="#is-there-any-mount-master-global-mount-namespace-in-kernelsu" aria-label="Permalink to &quot;Is there any --mount-master/global mount namespace in KernelSU?&quot;">​</a></h2><p>There isn&#39;t now(maybe in the future), But there are many ways to switch to global mount namespace manully, such as:</p><ol><li><code>nsenter -t 1 -m sh</code> to get a shell in global mount namespace.</li><li>Add <code>nsenter --mount=/proc/1/ns/mnt</code> to the command you want to execute, then the command is executed in global mount namespace. KernelSU is also <a href="https://github.com/tiann/KernelSU/blob/77056a710073d7a5f7ee38f9e77c9fd0b3256576/manager/app/src/main/java/me/weishu/kernelsu/ui/util/KsuCli.kt#L115" target="_blank" rel="noreferrer">using this way</a></li></ol><h2 id="i-am-gki1-0-can-i-use-this" tabindex="-1">I am GKI1.0, can i use this? <a class="header-anchor" href="#i-am-gki1-0-can-i-use-this" aria-label="Permalink to &quot;I am GKI1.0, can i use this?&quot;">​</a></h2><p>GKI1 is completely different from GKI2, you must compile kernel by yourself.</p>',33),s=[n];function i(l,d,u,h,c,p){return o(),a("div",null,s)}const b=e(r,[["render",i]]);export{m as __pageData,b as default};
