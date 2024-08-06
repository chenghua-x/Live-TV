
export function getPlayList(host) {
    return `#EXTM3U x-tvg-url="https://epg.v1.mk/fy.xml"
#EXTINF:-1 tvg-name="4K60PSDR-H264-AAC测试" tvg-logo="https://cdn.jsdelivr.net/gh/feiyangdigital/testvideo/tg.jpg" group-title="4K频道",4K60PSDR-H264-AAC测试
https://cdn.jsdelivr.net/gh/feiyangdigital/testvideo/sdr4kvideo/index.m3u8
#EXTINF:-1 tvg-name="4K60PHLG-HEVC-EAC3测试" tvg-logo="https://cdn.jsdelivr.net/gh/feiyangdigital/testvideo/tg.jpg" group-title="4K频道",4K60PHLG-HEVC-EAC3测试
https://cdn.jsdelivr.net/gh/feiyangdigital/testvideo/hlg4kvideo/index.m3u8
#EXTINF:-1,tvg-id="CCTV1" tvg-name="CCTV1" tvg-logo="https://epg.v1.mk/logo/CCTV1.png" group-title="央视",cctv1-高码
http://${host}/ysptp/cctv1.m3u8
#EXTINF:-1,tvg-id="CCTV1" tvg-name="CCTV1" tvg-logo="https://epg.v1.mk/logo/CCTV1.png" group-title="央视",CCTV-1
http://${host}/itv/6000000001000029752.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="cctv1" tvg-name="cctv1" tvg-logo="https://epg.v1.mk/logo/cctv1.png" group-title="央视",CCTV-1-50-FPS
http://${host}/itv/5000000004000002226.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="CCTV1" tvg-name="CCTV1" tvg-logo="https://epg.v1.mk/logo/CCTV1.png" group-title="央视",CCTV-1-HEVC
http://${host}/itv/1000000005000265001.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv2" tvg-name="cctv2" tvg-logo="https://epg.v1.mk/logo/cctv2.png" group-title="央视",cctv2-高码
http://${host}/ysptp/cctv2.m3u8
#EXTINF:-1,tvg-id="cctv2" tvg-name="cctv2" tvg-logo="https://epg.v1.mk/logo/cctv2.png" group-title="央视",CCTV-2
http://${host}/itv/1000000001000023315.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="CCTV2" tvg-name="CCTV2" tvg-logo="https://epg.v1.mk/logo/CCTV2.png" group-title="央视",CCTV-2-50-FPS
http://${host}/itv/6000000001000014161.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="cctv2" tvg-name="cctv2" tvg-logo="https://epg.v1.mk/logo/cctv2.png" group-title="央视",CCTV-2-HEVC
http://${host}/itv/1000000001000023315.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv3" tvg-name="cctv3" tvg-logo="https://epg.v1.mk/logo/cctv3.png" group-title="央视",cctv3-高码
http://${host}/ysptp/cctv3.m3u8
#EXTINF:-1,tvg-id="cctv3" tvg-name="cctv3" tvg-logo="https://epg.v1.mk/logo/cctv3.png" group-title="央视",CCTV-3
http://${host}/itv/6000000001000022313.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="cctv3" tvg-name="cctv3" tvg-logo="https://epg.v1.mk/logo/cctv3.png" group-title="央视",CCTV-3-HEVC
http://${host}/itv/1000000005000265003.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv4" tvg-name="cctv4" tvg-logo="https://epg.v1.mk/logo/cctv4.png" group-title="央视",cctv4-高码
http://${host}/ysptp/cctv4.m3u8
#EXTINF:-1,tvg-id="CCTV4" tvg-name="CCTV4" tvg-logo="https://epg.v1.mk/logo/CCTV4.png" group-title="央视",CCTV-4-50-FPS
http://${host}/itv/5000000011000031102.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="cctv4" tvg-name="cctv4" tvg-logo="https://epg.v1.mk/logo/cctv4.png" group-title="央视",CCTV-4-HEVC
http://${host}/itv/1000000005000265004.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv5" tvg-name="cctv5" tvg-logo="https://epg.v1.mk/logo/cctv5.png" group-title="央视",cctv5-高码
http://${host}/ysptp/cctv5.m3u8
#EXTINF:-1,tvg-id="cctv5" tvg-name="cctv5" tvg-logo="https://epg.v1.mk/logo/cctv5.png" group-title="央视",CCTV-5
http://${host}/itv/1000000005000025222.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv5" tvg-name="cctv5" tvg-logo="https://epg.v1.mk/logo/cctv5.png" group-title="央视",CCTV-5-HEVC
http://${host}/itv/1000000005000265005.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv5+" tvg-name="cctv5+" tvg-logo="https://epg.v1.mk/logo/cctv5+.png" group-title="央视",cctv5p-高码
http://${host}/ysptp/cctv5p.m3u8
#EXTINF:-1,tvg-id="cctv5+" tvg-name="cctv5+" tvg-logo="https://epg.v1.mk/logo/cctv5+.png" group-title="央视",CCTV-5+
http://${host}/itv/6000000001000015875.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="cctv5+" tvg-name="cctv5+" tvg-logo="https://epg.v1.mk/logo/cctv5+.png" group-title="央视",CCTV-5+-HEVC
http://${host}/itv/1000000005000265016.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv6" tvg-name="cctv6" tvg-logo="https://epg.v1.mk/logo/cctv6.png" group-title="央视",cctv6-高码
http://${host}/ysptp/cctv6.m3u8
#EXTINF:-1,tvg-id="cctv6" tvg-name="cctv6" tvg-logo="https://epg.v1.mk/logo/cctv6.png" group-title="央视",CCTV-6
http://${host}/itv/1000000001000001737.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="CCTV6" tvg-name="CCTV6" tvg-logo="https://epg.v1.mk/logo/CCTV6.png" group-title="央视",CCTV-6-50-FPS
http://${host}/itv/6000000001000004574.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="cctv6" tvg-name="cctv6" tvg-logo="https://epg.v1.mk/logo/cctv6.png" group-title="央视",CCTV-6-HEVC
http://${host}/itv/1000000005000265006.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="CCTV7" tvg-name="CCTV7" tvg-logo="https://epg.v1.mk/logo/CCTV7.png" group-title="央视",cctv7-高码
http://${host}/ysptp/cctv7.m3u8
#EXTINF:-1,tvg-id="CCTV7" tvg-name="CCTV7" tvg-logo="https://epg.v1.mk/logo/CCTV7.png" group-title="央视",CCTV-7
http://${host}/itv/1000000001000024341.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="CCTV7" tvg-name="CCTV7" tvg-logo="https://epg.v1.mk/logo/CCTV7.png" group-title="央视",CCTV-7-50-FPS
http://${host}/itv/6000000001000009055.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="CCTV7" tvg-name="CCTV7" tvg-logo="https://epg.v1.mk/logo/CCTV7.png" group-title="央视",CCTV-7-HEVC
http://${host}/itv/1000000005000265007.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv8" tvg-name="cctv8" tvg-logo="https://epg.v1.mk/logo/cctv8.png" group-title="央视",cctv8-高码
http://${host}/ysptp/cctv8.m3u8
#EXTINF:-1,tvg-id="cctv8" tvg-name="cctv8" tvg-logo="https://epg.v1.mk/logo/cctv8.png" group-title="央视",CCTV-8
http://${host}/itv/6000000001000001070.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="cctv8" tvg-name="cctv8" tvg-logo="https://epg.v1.mk/logo/cctv8.png" group-title="央视",CCTV-8-HEVC
http://${host}/itv/1000000005000265008.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv9" tvg-name="cctv9" tvg-logo="https://epg.v1.mk/logo/cctv9.png" group-title="央视",cctv9-高码
http://${host}/ysptp/cctv9.m3u8
#EXTINF:-1,tvg-id="cctv9" tvg-name="cctv9" tvg-logo="https://epg.v1.mk/logo/cctv9.png" group-title="央视",CCTV-9
http://${host}/itv/1000000001000014583.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="CCTV9" tvg-name="CCTV9" tvg-logo="https://epg.v1.mk/logo/CCTV9.png" group-title="央视",CCTV-9-50-FPS
http://${host}/itv/6000000001000032162.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="cctv9" tvg-name="cctv9" tvg-logo="https://epg.v1.mk/logo/cctv9.png" group-title="央视",CCTV-9-HEVC
http://${host}/itv/1000000005000265009.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv10" tvg-name="cctv10" tvg-logo="https://epg.v1.mk/logo/cctv10.png" group-title="央视",cctv10-高码
http://${host}/ysptp/cctv10.m3u8
#EXTINF:-1,tvg-id="cctv10" tvg-name="cctv10" tvg-logo="https://epg.v1.mk/logo/cctv10.png" group-title="央视",CCTV-10
http://${host}/itv/1000000001000023734.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv10" tvg-name="cctv10" tvg-logo="https://epg.v1.mk/logo/cctv10.png" group-title="央视",CCTV-10-50-FPS
http://${host}/itv/5000000004000012827.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="cctv10" tvg-name="cctv10" tvg-logo="https://epg.v1.mk/logo/cctv10.png" group-title="央视",CCTV-10-HEVC
http://${host}/itv/1000000005000265010.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv11" tvg-name="cctv11" tvg-logo="https://epg.v1.mk/logo/cctv11.png" group-title="央视",cctv11-高码
http://${host}/ysptp/cctv11.m3u8
#EXTINF:-1,tvg-id="cctv11" tvg-name="cctv11" tvg-logo="https://epg.v1.mk/logo/cctv11.png" group-title="央视",CCTV-11-50-FPS
http://${host}/itv/5000000011000031106.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="cctv11" tvg-name="cctv11" tvg-logo="https://epg.v1.mk/logo/cctv11.png" group-title="央视",CCTV-11-HEVC
http://${host}/itv/1000000005000265011.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv12" tvg-name="cctv12" tvg-logo="https://epg.v1.mk/logo/cctv12.png" group-title="央视",cctv12-高码
http://${host}/ysptp/cctv12.m3u8
#EXTINF:-1,tvg-id="cctv12" tvg-name="cctv12" tvg-logo="https://epg.v1.mk/logo/cctv12.png" group-title="央视",CCTV-12
http://${host}/itv/1000000001000032494.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv12" tvg-name="cctv12" tvg-logo="https://epg.v1.mk/logo/cctv12.png" group-title="央视",CCTV-12-50-FPS
http://${host}/itv/6000000001000022586.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="cctv12" tvg-name="cctv12" tvg-logo="https://epg.v1.mk/logo/cctv12.png" group-title="央视",CCTV-12-HEVC
http://${host}/itv/1000000005000265012.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv13" tvg-name="cctv13" tvg-logo="https://epg.v1.mk/logo/cctv13.png" group-title="央视",cctv13-高码
http://${host}/ysptp/cctv13.m3u8
#EXTINF:-1,tvg-id="cctv13" tvg-name="cctv13" tvg-logo="https://epg.v1.mk/logo/cctv13.png" group-title="央视",CCTV-13-50-FPS
http://${host}/itv/5000000011000031108.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="cctv14" tvg-name="cctv14" tvg-logo="https://epg.v1.mk/logo/cctv14.png" group-title="央视",cctv14-高码
http://${host}/ysptp/cctv14.m3u8
#EXTINF:-1,tvg-id="cctv14" tvg-name="cctv14" tvg-logo="https://epg.v1.mk/logo/cctv14.png" group-title="央视",CCTV-14
http://${host}/itv/1000000001000008170.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv14" tvg-name="cctv14" tvg-logo="https://epg.v1.mk/logo/cctv14.png" group-title="央视",CCTV-14-50-FPS
http://${host}/itv/5000000004000006673.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="cctv14" tvg-name="cctv14" tvg-logo="https://epg.v1.mk/logo/cctv14.png" group-title="央视",CCTV-14-HEVC
http://${host}/itv/1000000005000265013.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv15" tvg-name="cctv15" tvg-logo="https://epg.v1.mk/logo/cctv15.png" group-title="央视",cctv15-高码
http://${host}/ysptp/cctv15.m3u8
#EXTINF:-1,tvg-id="cctv15" tvg-name="cctv15" tvg-logo="https://epg.v1.mk/logo/cctv15.png" group-title="央视",CCTV-15-50-FPS
http://${host}/itv/5000000011000031109.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="cctv15" tvg-name="cctv15" tvg-logo="https://epg.v1.mk/logo/cctv15.png" group-title="央视",CCTV-15-HEVC
http://${host}/itv/1000000005000265014.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv16" tvg-name="cctv16" tvg-logo="https://epg.v1.mk/logo/cctv16.png" group-title="央视",cctv16-高码
http://${host}/ysptp/cctv16.m3u8
#EXTINF:-1,tvg-id="cctv16" tvg-name="cctv16" tvg-logo="https://epg.v1.mk/logo/cctv16.png" group-title="央视",CCTV-16
http://${host}/itv/1000000006000233002.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv16" tvg-name="cctv16" tvg-logo="https://epg.v1.mk/logo/cctv16.png" group-title="4K频道",CCTV-16-4K-HEVC
http://${host}/itv/5000000008000023254.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="cctv16" tvg-name="cctv16" tvg-logo="https://epg.v1.mk/logo/cctv16.png" group-title="4K频道",cctv164k_10m
http://${host}/ysptp/cctv4k16_10m.m3u8
#EXTINF:-1,tvg-id="cctv16" tvg-name="cctv16" tvg-logo="https://epg.v1.mk/logo/cctv16.png" group-title="4K频道",cctv164k
http://${host}/ysptp/cctv4k16.m3u8
#EXTINF:-1,tvg-id="cctv17" tvg-name="cctv17" tvg-logo="https://epg.v1.mk/logo/cctv17.png" group-title="央视",cctv17-高码
http://${host}/ysptp/cctv17.m3u8
#EXTINF:-1,tvg-id="cctv17" tvg-name="cctv17" tvg-logo="https://epg.v1.mk/logo/cctv17.png" group-title="央视",CCTV-17
http://${host}/itv/1000000006000268004.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cctv17" tvg-name="cctv17" tvg-logo="https://epg.v1.mk/logo/cctv17.png" group-title="央视",CCTV-17-HEVC
http://${host}/itv/1000000005000265015.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="cgtn" tvg-name="cgtn" tvg-logo="https://epg.v1.mk/logo/cgtn.png" group-title="央视",CGTN
http://${host}/itv/7745129417417101820.m3u8?cdn=hnbblive
#EXTINF:-1,tvg-id="CGTN记录" tvg-name="CGTN记录" tvg-logo="https://epg.v1.mk/logo/CGTN记录.png" group-title="央视",CGTN-记录
http://${host}/itv/7114647837765104058.m3u8?cdn=hnbblive
#EXTINF:-1,tvg-id="CGTNALBY" tvg-name="CGTNALBY" tvg-logo="https://epg.v1.mk/logo/CGTNALBY.png" group-title="央视",cgtnar-高码
http://${host}/ysptp/cgtnar.m3u8
#EXTINF:-1,tvg-id="cgtndocumentary" tvg-name="cgtndocumentary" tvg-logo="https://epg.v1.mk/logo/cgtndocumentary.png" group-title="央视",cgtndoc-高码
http://${host}/ysptp/cgtndoc.m3u8
#EXTINF:-1,tvg-id="CGTNEN" tvg-name="CGTNEN" tvg-logo="https://epg.v1.mk/logo/CGTN.png" group-title="央视",cgtnen-高码
http://${host}/ysptp/cgtnen.m3u8
#EXTINF:-1,tvg-id="cgtnfrench" tvg-name="cgtnfrench" tvg-logo="https://epg.v1.mk/logo/cgtnfrench.png" group-title="央视",cgtnfr-高码
http://${host}/ysptp/cgtnfr.m3u8
#EXTINF:-1,tvg-id="cgtnru" tvg-name="cgtnru" tvg-logo="https://epg.v1.mk/logo/CGTN1.png" group-title="央视",cgtnru-高码
http://${host}/ysptp/cgtnru.m3u8
#EXTINF:-1,tvg-id="cgtnsp" tvg-name="cgtnsp" tvg-logo="https://epg.v1.mk/logo/CGTN1.png" group-title="央视",cgtnsp-高码
http://${host}/ysptp/cgtnsp.m3u8
#EXTINF:-1,tvg-id="cctv4k" tvg-name="cctv4k" tvg-logo="https://epg.v1.mk/logo/cctv4k.png" group-title="4K频道",cctv4k_10m
http://${host}/ysptp/cctv4k_10m.m3u8
#EXTINF:-1,tvg-id="cctv4k" tvg-name="cctv4k" tvg-logo="https://epg.v1.mk/logo/cctv4k.png" group-title="4K频道",cctv4k
http://${host}/ysptp/cctv4k.m3u8
#EXTINF:-1,tvg-id="cctv8k" tvg-name="cctv8k" tvg-logo="https://epg.v1.mk/logo/cctv8k.png" group-title="8K频道",cctv8k_36m
http://${host}/ysptp/cctv8k_36m.m3u8
#EXTINF:-1,tvg-id="cctv8k" tvg-name="cctv8k" tvg-logo="https://epg.v1.mk/logo/cctv8k.png" group-title="8K频道",cctv8k_120m
http://${host}/ysptp/cctv8k_120m.m3u8
#EXTINF:-1,tvg-id="中国教育1台" tvg-name="中国教育1台" tvg-logo="https://epg.v1.mk/logo/中国教育1台.png" group-title="其他",中国教育电视台-1
http://${host}/itv/5000000002000002652.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="中国教育4台" tvg-name="中国教育4台" tvg-logo="https://epg.v1.mk/logo/中国教育4台.png" group-title="其他",中国教育电视台-4
http://${host}/itv/5000000011000031126.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="北京卫视" tvg-name="北京卫视" tvg-logo="https://epg.v1.mk/logo/北京卫视.png" group-title="北京",北京卫视
http://${host}/itv/6000000001000020451.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="北京卫视" tvg-name="北京卫视" tvg-logo="https://epg.v1.mk/logo/北京卫视.png" group-title="北京",北京卫视-HEVC
http://${host}/itv/1000000005000265027.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="北京纪实科教" tvg-name="北京纪实科教" tvg-logo="https://epg.v1.mk/logo/北京纪实科教.png" group-title="北京",北京纪实科教
http://${host}/itv/1000000001000001910.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="北京纪实科教" tvg-name="北京纪实科教" tvg-logo="https://epg.v1.mk/logo/北京纪实科教.png" group-title="北京",北京纪实科教-HEVC
http://${host}/itv/1000000005000265020.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="北京卡酷少儿" tvg-name="北京卡酷少儿" tvg-logo="https://epg.v1.mk/logo/北京卡酷少儿.png" group-title="北京",北京卡酷少儿
http://${host}/itv/7851974109718180595.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="安徽卫视" tvg-name="安徽卫视" tvg-logo="https://epg.v1.mk/logo/安徽卫视.png" group-title="安徽",安徽卫视
http://${host}/itv/1000000001000030159.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="安徽卫视" tvg-name="安徽卫视" tvg-logo="https://epg.v1.mk/logo/安徽卫视.png" group-title="安徽",安徽卫视-50-FPS
http://${host}/itv/6000000001000009954.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="安徽卫视" tvg-name="安徽卫视" tvg-logo="https://epg.v1.mk/logo/安徽卫视.png" group-title="安徽",安徽卫视-HEVC
http://${host}/itv/1000000005000265025.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="东南卫视" tvg-name="东南卫视" tvg-logo="https://epg.v1.mk/logo/东南卫视.png" group-title="卫视",东南卫视
http://${host}/itv/5000000004000010584.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="东南卫视" tvg-name="东南卫视" tvg-logo="https://epg.v1.mk/logo/东南卫视.png" group-title="卫视",东南卫视-HEVC
http://${host}/itv/1000000005000265033.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="甘肃卫视" tvg-name="甘肃卫视" tvg-logo="https://epg.v1.mk/logo/甘肃卫视.png" group-title="甘肃",甘肃卫视
http://${host}/itv/5000000011000031121.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="广东卫视" tvg-name="广东卫视" tvg-logo="https://epg.v1.mk/logo/广东卫视.png" group-title="广东",广东卫视
http://${host}/itv/1000000001000014176.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="广东卫视" tvg-name="广东卫视" tvg-logo="https://epg.v1.mk/logo/广东卫视.png" group-title="广东",广东卫视-50-FPS
http://${host}/itv/6000000001000031076.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="广东卫视" tvg-name="广东卫视" tvg-logo="https://epg.v1.mk/logo/广东卫视.png" group-title="广东",广东卫视-HEVC
http://${host}/itv/1000000005000265034.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="广西卫视" tvg-name="广西卫视" tvg-logo="https://epg.v1.mk/logo/广西卫视.png" group-title="卫视",广西卫视
http://${host}/itv/5000000011000031118.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="贵州卫视" tvg-name="贵州卫视" tvg-logo="https://epg.v1.mk/logo/贵州卫视.png" group-title="贵州",贵州卫视
http://${host}/itv/5000000004000025843.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="海南卫视" tvg-name="海南卫视" tvg-logo="https://epg.v1.mk/logo/海南卫视.png" group-title="海南",海南卫视
http://${host}/itv/5000000004000006211.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="河北卫视" tvg-name="河北卫视" tvg-logo="https://epg.v1.mk/logo/河北卫视.png" group-title="河北",河北卫视
http://${host}/itv/5000000006000040016.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="河南卫视" tvg-name="河南卫视" tvg-logo="https://epg.v1.mk/logo/河南卫视.png" group-title="河南",河南卫视
http://${host}/itv/5000000011000031119.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="黑龙江卫视" tvg-name="黑龙江卫视" tvg-logo="https://epg.v1.mk/logo/黑龙江卫视.png" group-title="黑龙江",黑龙江卫视
http://${host}/itv/1000000001000001925.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="黑龙江卫视" tvg-name="黑龙江卫视" tvg-logo="https://epg.v1.mk/logo/黑龙江卫视.png" group-title="黑龙江",黑龙江卫视-50-FPS
http://${host}/itv/6000000001000016510.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="黑龙江卫视" tvg-name="黑龙江卫视" tvg-logo="https://epg.v1.mk/logo/黑龙江卫视.png" group-title="黑龙江",黑龙江卫视-HEVC
http://${host}/itv/1000000005000265029.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="湖北卫视" tvg-name="湖北卫视" tvg-logo="https://epg.v1.mk/logo/湖北卫视.png" group-title="湖北",湖北卫视
http://${host}/itv/1000000001000024621.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="湖北卫视" tvg-name="湖北卫视" tvg-logo="https://epg.v1.mk/logo/湖北卫视.png" group-title="湖北",湖北卫视-50-FPS
http://${host}/itv/6000000001000015436.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="湖北卫视" tvg-name="湖北卫视" tvg-logo="https://epg.v1.mk/logo/湖北卫视.png" group-title="湖北",湖北卫视-HEVC
http://${host}/itv/1000000005000265023.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="湖南卫视" tvg-name="湖南卫视" tvg-logo="https://epg.v1.mk/logo/湖南卫视.png" group-title="湖南",湖南卫视
http://${host}/itv/5000000004000006692.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="湖南卫视" tvg-name="湖南卫视" tvg-logo="https://epg.v1.mk/logo/湖南卫视.png" group-title="湖南",湖南卫视-50-FPS
http://${host}/itv/6000000001000018044.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="湖南卫视" tvg-name="湖南卫视" tvg-logo="https://epg.v1.mk/logo/湖南卫视.png" group-title="湖南",湖南卫视-HEVC
http://${host}/itv/1000000005000265024.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="湖南金鹰纪实" tvg-name="湖南金鹰纪实" tvg-logo="https://epg.v1.mk/logo/湖南金鹰纪实.png" group-title="湖南",湖南金鹰纪实
http://${host}/itv/5000000011000031203.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="湖南" tvg-name="湖南" tvg-logo="https://epg.v1.mk/logo/湖南.png" group-title="湖南",湖南快乐垂钓
http://${host}/itv/5000000011000031206.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="湖南茶频道" tvg-name="湖南茶频道" tvg-logo="https://epg.v1.mk/logo/湖南茶频道.png" group-title="湖南",湖南茶频道
http://${host}/itv/5000000011000031209.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="吉林卫视" tvg-name="吉林卫视" tvg-logo="https://epg.v1.mk/logo/吉林卫视.png" group-title="吉林",吉林卫视
http://${host}/itv/5000000011000031117.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="江苏卫视" tvg-name="江苏卫视" tvg-logo="https://epg.v1.mk/logo/江苏卫视.png" group-title="江苏",江苏卫视-50-FPS
http://${host}/itv/6000000001000014861.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="江苏卫视" tvg-name="江苏卫视" tvg-logo="https://epg.v1.mk/logo/江苏卫视.png" group-title="江苏",江苏卫视
http://${host}/itv/1000000001000001828.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="江苏卫视" tvg-name="江苏卫视" tvg-logo="https://epg.v1.mk/logo/江苏卫视.png" group-title="江苏",江苏卫视-HEVC
http://${host}/itv/1000000005000265030.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="江西卫视" tvg-name="江西卫视" tvg-logo="https://epg.v1.mk/logo/江西卫视.png" group-title="江西",江西卫视
http://${host}/itv/1000000006000268001.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="江西卫视" tvg-name="江西卫视" tvg-logo="https://epg.v1.mk/logo/江西卫视.png" group-title="江西",江西卫视-HEVC
http://${host}/itv/1000000005000265032.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="辽宁卫视" tvg-name="辽宁卫视" tvg-logo="https://epg.v1.mk/logo/辽宁卫视.png" group-title="辽宁",辽宁卫视
http://${host}/itv/5000000004000011671.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="辽宁卫视" tvg-name="辽宁卫视" tvg-logo="https://epg.v1.mk/logo/辽宁卫视.png" group-title="辽宁",辽宁卫视-HEVC
http://${host}/itv/1000000005000265022.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="青海卫视" tvg-name="青海卫视" tvg-logo="https://epg.v1.mk/logo/青海卫视.png" group-title="青海",青海卫视
http://${host}/itv/1000000002000013359.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="山东卫视" tvg-name="山东卫视" tvg-logo="https://epg.v1.mk/logo/山东卫视.png" group-title="山东",山东卫视
http://${host}/itv/1000000001000016568.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="山东卫视" tvg-name="山东卫视" tvg-logo="https://epg.v1.mk/logo/山东卫视.png" group-title="山东",山东卫视-50-FPS
http://${host}/itv/6000000001000004134.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="山东卫视" tvg-name="山东卫视" tvg-logo="https://epg.v1.mk/logo/山东卫视.png" group-title="山东",山东卫视-HEVC
http://${host}/itv/1000000005000265019.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="东方卫视" tvg-name="东方卫视" tvg-logo="https://epg.v1.mk/logo/东方卫视.png" group-title="上海",上海东方卫视
http://${host}/itv/6000000001000003639.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="东方卫视" tvg-name="东方卫视" tvg-logo="https://epg.v1.mk/logo/东方卫视.png" group-title="上海",上海东方卫视-50-FPS
http://${host}/itv/5000000004000014098.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="东方卫视" tvg-name="东方卫视" tvg-logo="https://epg.v1.mk/logo/东方卫视.png" group-title="上海",上海东方卫视-HEVC
http://${host}/itv/1000000005000265018.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="上海ICS" tvg-name="上海ICS" tvg-logo="https://epg.v1.mk/logo/上海ICS.png" group-title="上海",上海-ICS-外语
http://${host}/itv/5000000010000030951.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="上海第一财经" tvg-name="上海第一财经" tvg-logo="https://epg.v1.mk/logo/上海第一财经.png" group-title="上海",上海第一财经
http://${host}/itv/5000000010000027146.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="东方财经" tvg-name="东方财经" tvg-logo="https://epg.v1.mk/logo/东方财经.png" group-title="上海",上海东方财经
http://${host}/itv/5000000007000010003.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="上海东方影视" tvg-name="上海东方影视" tvg-logo="https://epg.v1.mk/logo/上海东方影视.png" group-title="上海",上海东方影视
http://${host}/itv/5000000010000032212.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="上海都市" tvg-name="上海都市" tvg-logo="https://epg.v1.mk/logo/上海都市.png" group-title="上海",上海都市
http://${host}/itv/5000000010000018926.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="法治天地" tvg-name="法治天地" tvg-logo="https://epg.v1.mk/logo/法治天地.png" group-title="上海",上海法治天地
http://${host}/itv/2000000002000000014.m3u8?cdn=hnbblive
#EXTINF:-1,tvg-id="哈哈炫动" tvg-name="哈哈炫动" tvg-logo="https://epg.v1.mk/logo/哈哈炫动.png" group-title="上海",上海哈哈炫动
http://${host}/itv/5000000011000031123.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="纪实人文" tvg-name="纪实人文" tvg-logo="https://epg.v1.mk/logo/纪实人文.png" group-title="上海",上海纪实人文-50-FPS
http://${host}/itv/5000000004000010282.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="纪实人文" tvg-name="纪实人文" tvg-logo="https://epg.v1.mk/logo/纪实人文.png" group-title="上海",上海纪实人文-HEVC
http://${host}/itv/1000000005000265021.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="五星体育" tvg-name="五星体育" tvg-logo="https://epg.v1.mk/logo/五星体育.png" group-title="上海",上海五星体育
http://${host}/itv/5000000010000017540.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="上海新闻综合" tvg-name="上海新闻综合" tvg-logo="https://epg.v1.mk/logo/上海新闻综合.png" group-title="上海",上海新闻综合
http://${host}/itv/5000000011000031110.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="深圳卫视" tvg-name="深圳卫视" tvg-logo="https://epg.v1.mk/logo/深圳卫视.png" group-title="卫视",深圳卫视
http://${host}/itv/5000000004000007410.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="深圳卫视" tvg-name="深圳卫视" tvg-logo="https://epg.v1.mk/logo/深圳卫视.png" group-title="卫视",深圳卫视-50-FPS
http://${host}/itv/6000000001000002116.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="深圳卫视" tvg-name="深圳卫视" tvg-logo="https://epg.v1.mk/logo/深圳卫视.png" group-title="卫视",深圳卫视-HEVC
http://${host}/itv/1000000005000265028.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="四川卫视" tvg-name="四川卫视" tvg-logo="https://epg.v1.mk/logo/四川卫视.png" group-title="四川",四川卫视
http://${host}/itv/5000000004000006119.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="天津卫视" tvg-name="天津卫视" tvg-logo="https://epg.v1.mk/logo/天津卫视.png" group-title="卫视",天津卫视
http://${host}/itv/5000000004000006827.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="天津卫视" tvg-name="天津卫视" tvg-logo="https://epg.v1.mk/logo/天津卫视.png" group-title="卫视",天津卫视-50-FPS
http://${host}/itv/6000000001000009186.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="天津卫视" tvg-name="天津卫视" tvg-logo="https://epg.v1.mk/logo/天津卫视.png" group-title="卫视",天津卫视-HEVC
http://${host}/itv/1000000005000265026.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="云南卫视" tvg-name="云南卫视" tvg-logo="https://epg.v1.mk/logo/云南卫视.png" group-title="云南",云南卫视
http://${host}/itv/5000000011000031120.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="浙江卫视" tvg-name="浙江卫视" tvg-logo="https://epg.v1.mk/logo/浙江卫视.png" group-title="浙江",浙江卫视-50-FPS
http://${host}/itv/5000000004000007275.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="浙江卫视" tvg-name="浙江卫视" tvg-logo="https://epg.v1.mk/logo/浙江卫视.png" group-title="浙江",浙江卫视
http://${host}/itv/1000000001000014260.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="浙江卫视" tvg-name="浙江卫视" tvg-logo="https://epg.v1.mk/logo/浙江卫视.png" group-title="浙江",浙江卫视-HEVC
http://${host}/itv/1000000005000265031.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="重庆卫视" tvg-name="重庆卫视" tvg-logo="https://epg.v1.mk/logo/重庆卫视.png" group-title="重庆",重庆卫视
http://${host}/itv/1000000001000001096.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="重庆卫视" tvg-name="重庆卫视" tvg-logo="https://epg.v1.mk/logo/重庆卫视.png" group-title="重庆",重庆卫视-HEVC
http://${host}/itv/1000000005000265017.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="华数4K" tvg-name="华数4K" tvg-logo="https://epg.v1.mk/logo/华数4K.png" group-title="4K频道",华数-4K
http://${host}/itv/6000000003000004748.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="纯享4K" tvg-name="纯享4K" tvg-logo="https://epg.v1.mk/logo/纯享4K.png" group-title="4K频道",纯享-4K
http://${host}/itv/1000000004000011651.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="咪咕4K" tvg-name="咪咕4K" tvg-logo="https://epg.v1.mk/logo/咪咕4K.png" group-title="4K频道",咪咕4K-1
http://${host}/itv/3000000010000005180.m3u8?cdn=FifastbLive
#EXTINF:-1,tvg-id="咪咕4K" tvg-name="咪咕4K" tvg-logo="https://epg.v1.mk/logo/咪咕4K.png" group-title="4K频道",咪咕4K-2
http://${host}/itv/3000000010000015686.m3u8?cdn=FifastbLive
#EXTINF:-1,tvg-id="咪咕全民热练" tvg-name="咪咕全民热练" tvg-logo="https://epg.v1.mk/logo/咪咕4k.png" group-title="其他",咪咕全民热练
http://${host}/itv/3000000020000031315.m3u8?cdn=FifastbLive
#EXTINF:-1,tvg-id="求索动物" tvg-name="求索动物" tvg-logo="https://epg.v1.mk/logo/求索动物.png" group-title="其他",求索动物
http://${host}/itv/6000000002000010046.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="求索纪录" tvg-name="求索纪录" tvg-logo="https://epg.v1.mk/logo/求索纪录.png" group-title="其他",求索纪录
http://${host}/itv/6000000002000032052.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="求索科学" tvg-name="求索科学" tvg-logo="https://epg.v1.mk/logo/求索科学.png" group-title="其他",求索科学
http://${host}/itv/6000000002000032344.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="求索生活" tvg-name="求索生活" tvg-logo="https://epg.v1.mk/logo/求索生活.png" group-title="其他",求索生活
http://${host}/itv/6000000002000003382.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="NewTV精品综合" tvg-name="NewTV精品综合" tvg-logo="https://epg.v1.mk/logo/NewTV精品综合.png" group-title="NEWTV",NewTV-精品综合
http://${host}/itv/1000000004000019008.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv精品大剧" tvg-name="newtv精品大剧" tvg-logo="https://epg.v1.mk/logo/newtv精品大剧.png" group-title="NEWTV",NewTV-精品大剧
http://${host}/itv/1000000004000013968.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv精品纪录" tvg-name="newtv精品纪录" tvg-logo="https://epg.v1.mk/logo/newtv精品纪录.png" group-title="NEWTV",NewTV-精品纪录
http://${host}/itv/1000000004000013730.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv精品体育" tvg-name="newtv精品体育" tvg-logo="https://epg.v1.mk/logo/newtv精品体育.png" group-title="NEWTV",NewTV-精品体育
http://${host}/itv/1000000004000014634.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="NEWTV精品萌宠" tvg-name="NEWTV精品萌宠" tvg-logo="https://epg.v1.mk/logo/NEWTV精品萌宠.png" group-title="NEWTV",NewTV-精品萌宠
http://${host}/itv/1000000006000032328.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv爱情喜剧" tvg-name="newtv爱情喜剧" tvg-logo="https://epg.v1.mk/logo/newtv爱情喜剧.png" group-title="NEWTV",NewTV-爱情喜剧
http://${host}/itv/2000000003000000010.m3u8?cdn=hnbblive
#EXTINF:-1,tvg-id="newtv超级电视剧" tvg-name="newtv超级电视剧" tvg-logo="https://epg.v1.mk/logo/newtv超级电视剧.png" group-title="NEWTV",NewTV-超级电视剧
http://${host}/itv/1000000006000268003.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv超级电影" tvg-name="newtv超级电影" tvg-logo="https://epg.v1.mk/logo/newtv超级电影.png" group-title="NEWTV",NewTV-超级电影
http://${host}/itv/1000000003000012426.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv超级体育" tvg-name="newtv超级体育" tvg-logo="https://epg.v1.mk/logo/newtv超级体育.png" group-title="NEWTV",NewTV-超级体育
http://${host}/itv/1000000001000009601.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv超级综艺" tvg-name="newtv超级综艺" tvg-logo="https://epg.v1.mk/logo/newtv超级综艺.png" group-title="NEWTV",NewTV-超级综艺
http://${host}/itv/1000000006000268002.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv潮妈辣婆" tvg-name="newtv潮妈辣婆" tvg-logo="https://epg.v1.mk/logo/newtv潮妈辣婆.png" group-title="NEWTV",NewTV-潮妈辣婆
http://${host}/itv/2000000003000000018.m3u8?cdn=hnbblive
#EXTINF:-1,tvg-id="NewTV东北热剧" tvg-name="NewTV东北热剧" tvg-logo="https://epg.v1.mk/logo/NewTV东北热剧.png" group-title="NEWTV",NewTV-东北热剧
http://${host}/itv/1000000005000266013.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv动作电影" tvg-name="newtv动作电影" tvg-logo="https://epg.v1.mk/logo/newtv动作电影.png" group-title="NEWTV",NewTV-动作电影
http://${host}/itv/1000000004000018653.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="NewTV古装剧场" tvg-name="NewTV古装剧场" tvg-logo="https://epg.v1.mk/logo/NewTV古装剧场.png" group-title="NEWTV",NewTV-古装剧场
http://${host}/itv/2000000003000000024.m3u8?cdn=hnbblive
#EXTINF:-1,tvg-id="NewTV欢乐剧场" tvg-name="NewTV欢乐剧场" tvg-logo="https://epg.v1.mk/logo/NewTV欢乐剧场.png" group-title="NEWTV",NewTV-欢乐剧场
http://${host}/itv/1000000005000266012.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv家庭剧场" tvg-name="newtv家庭剧场" tvg-logo="https://epg.v1.mk/logo/newtv家庭剧场.png" group-title="NEWTV",NewTV-家庭剧场
http://${host}/itv/1000000004000008284.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="NewTV金牌综艺" tvg-name="NewTV金牌综艺" tvg-logo="https://epg.v1.mk/logo/NewTV金牌综艺.png" group-title="NEWTV",NewTV-金牌综艺
http://${host}/itv/1000000004000026167.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv惊悚悬疑" tvg-name="newtv惊悚悬疑" tvg-logo="https://epg.v1.mk/logo/newtv惊悚悬疑.png" group-title="NEWTV",NewTV-惊悚悬疑
http://${host}/itv/1000000004000024282.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv军旅剧场" tvg-name="newtv军旅剧场" tvg-logo="https://epg.v1.mk/logo/newtv军旅剧场.png" group-title="NEWTV",NewTV-军旅剧场
http://${host}/itv/2000000003000000014.m3u8?cdn=hnbblive
#EXTINF:-1,tvg-id="newtv军事评论" tvg-name="newtv军事评论" tvg-logo="https://epg.v1.mk/logo/newtv军事评论.png" group-title="NEWTV",NewTV-军事评论
http://${host}/itv/2000000003000000022.m3u8?cdn=hnbblive
#EXTINF:-1,tvg-id="NewTV魅力潇湘" tvg-name="NewTV魅力潇湘" tvg-logo="https://epg.v1.mk/logo/NewTV魅力潇湘.png" group-title="NEWTV",NewTV-魅力潇湘
http://${host}/itv/1000000001000006197.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="NewTV明星大片" tvg-name="NewTV明星大片" tvg-logo="https://epg.v1.mk/logo/NewTV明星大片.png" group-title="NEWTV",NewTV-明星大片
http://${host}/itv/2000000003000000016.m3u8?cdn=hnbblive
#EXTINF:-1,tvg-id="newtv农业致富" tvg-name="newtv农业致富" tvg-logo="https://epg.v1.mk/logo/newtv农业致富.png" group-title="NEWTV",NewTV-农业致富
http://${host}/itv/2000000003000000003.m3u8?cdn=hnbblive
#EXTINF:-1,tvg-id="NEWTV武博世界" tvg-name="NEWTV武博世界" tvg-logo="https://epg.v1.mk/logo/NEWTV武博世界.png" group-title="NEWTV",NewTV-武博世界
http://${host}/itv/2000000003000000007.m3u8?cdn=hnbblive
#EXTINF:-1,tvg-id="newtv炫舞未来" tvg-name="newtv炫舞未来" tvg-logo="https://epg.v1.mk/logo/newtv炫舞未来.png" group-title="NEWTV",NewTV-炫舞未来
http://${host}/itv/1000000001000000515.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv怡伴健康" tvg-name="newtv怡伴健康" tvg-logo="https://epg.v1.mk/logo/newtv怡伴健康.png" group-title="NEWTV",NewTV-怡伴健康
http://${host}/itv/1000000005000266011.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="newtv中国功夫" tvg-name="newtv中国功夫" tvg-logo="https://epg.v1.mk/logo/newtv中国功夫.png" group-title="NEWTV",NewTV-中国功夫
http://${host}/itv/2000000003000000009.m3u8?cdn=hnbblive
#EXTINF:-1,tvg-id="NEWTV黑莓电影" tvg-name="NEWTV黑莓电影" tvg-logo="https://epg.v1.mk/logo/NEWTV黑莓电影.png" group-title="NEWTV",NewTV-黑莓电影
http://${host}/itv/1000000004000019624.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="NEWTV黑莓动画" tvg-name="NEWTV黑莓动画" tvg-logo="https://epg.v1.mk/logo/NEWTV黑莓动画.png" group-title="NEWTV",NewTV-黑莓动画
http://${host}/itv/1000000004000021734.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="NEWTV哒啵电竞" tvg-name="NEWTV哒啵电竞" tvg-logo="https://epg.v1.mk/logo/哒啵电竞.png" group-title="NEWTV",NewTV-哒啵电竞
http://${host}/itv/1000000006000032327.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="NEWTV哒啵赛事" tvg-name="NEWTV哒啵赛事" tvg-logo="https://epg.v1.mk/logo/哒啵赛事.png" group-title="NEWTV",NewTV-哒啵赛事
http://${host}/itv/1000000001000003775.m3u8?cdn=ystenlive
#EXTINF:-1,tvg-id="SITV动漫秀场" tvg-name="SITV动漫秀场" tvg-logo="https://epg.v1.mk/logo/SITV.png" group-title="其他",SiTV-动漫秀场
http://${host}/itv/5000000011000031113.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="SITV都市剧场" tvg-name="SITV都市剧场" tvg-logo="https://epg.v1.mk/logo/SITV都市剧场.png" group-title="其他",SiTV-都市剧场
http://${host}/itv/5000000011000031111.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="SITV法治天地" tvg-name="SITV法治天地" tvg-logo="https://epg.v1.mk/logo/SITV法治天地.png" group-title="其他",SiTV-法治天地
http://${host}/itv/9001547084732463424.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="SITV欢笑剧场" tvg-name="SITV欢笑剧场" tvg-logo="https://epg.v1.mk/logo/SITV欢笑剧场.png" group-title="其他",SiTV-欢笑剧场
http://${host}/itv/5000000002000009455.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="SITV欢笑剧场" tvg-name="SITV欢笑剧场" tvg-logo="https://epg.v1.mk/logo/SITV欢笑剧场.png" group-title="4K频道",SiTV-欢笑剧场-4K
http://${host}/itv/5000000007000010001.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="SITV金色学堂" tvg-name="SITV金色学堂" tvg-logo="https://epg.v1.mk/logo/SITV金色学堂.png" group-title="其他",SiTV-金色学堂
http://${host}/itv/5000000010000026105.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="SITV劲爆体育" tvg-name="SITV劲爆体育" tvg-logo="https://epg.v1.mk/logo/SITV劲爆体育.png" group-title="其他",SiTV-劲爆体育
http://${host}/itv/5000000002000029972.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="SITV乐游" tvg-name="SITV乐游" tvg-logo="https://epg.v1.mk/logo/SITV乐游.png" group-title="其他",SiTV-乐游
http://${host}/itv/5000000011000031112.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="SITV魅力足球" tvg-name="SITV魅力足球" tvg-logo="https://epg.v1.mk/logo/SITV.png" group-title="其他",SiTV-魅力足球
http://${host}/itv/5000000011000031207.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="SITV七彩戏剧" tvg-name="SITV七彩戏剧" tvg-logo="https://epg.v1.mk/logo/SITV七彩戏剧.png" group-title="其他",SiTV-七彩戏剧
http://${host}/itv/5000000011000031116.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="SITV生活时尚" tvg-name="SITV生活时尚" tvg-logo="https://epg.v1.mk/logo/SITV.png" group-title="其他",SiTV-生活时尚
http://${host}/itv/5000000002000019634.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="SITV游戏风云" tvg-name="SITV游戏风云" tvg-logo="https://epg.v1.mk/logo/SITV.png" group-title="其他",SiTV-游戏风云
http://${host}/itv/5000000011000031114.m3u8?cdn=bestzb
#EXTINF:-1,tvg-id="IHOT爱电竞" tvg-name="IHOT爱电竞" tvg-logo="https://epg.v1.mk/logo/IHOT爱电竞.png" group-title="IHOT",iHOT-爱电竞
http://${host}/itv/6000000006000230630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱谍战" tvg-name="IHOT爱谍战" tvg-logo="https://epg.v1.mk/logo/IHOT爱谍战.png" group-title="IHOT",iHOT-爱谍战
http://${host}/itv/6000000006000070630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱动漫" tvg-name="IHOT爱动漫" tvg-logo="https://epg.v1.mk/logo/IHOT爱动漫.png" group-title="IHOT",iHOT-爱动漫
http://${host}/itv/6000000006000280630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱都市" tvg-name="IHOT爱都市" tvg-logo="https://epg.v1.mk/logo/IHOT爱都市.png" group-title="IHOT",iHOT-爱都市
http://${host}/itv/6000000006000080630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱怀旧" tvg-name="IHOT爱怀旧" tvg-logo="https://epg.v1.mk/logo/IHOT爱怀旧.png" group-title="IHOT",iHOT-爱怀旧
http://${host}/itv/6000000006000260630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱经典" tvg-name="IHOT爱经典" tvg-logo="https://epg.v1.mk/logo/IHOT爱经典.png" group-title="IHOT",iHOT-爱经典
http://${host}/itv/6000000006000060630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱科幻" tvg-name="IHOT爱科幻" tvg-logo="https://epg.v1.mk/logo/IHOT爱科幻.png" group-title="IHOT",iHOT-爱科幻
http://${host}/itv/6000000006000020630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱科学" tvg-name="IHOT爱科学" tvg-logo="https://epg.v1.mk/logo/IHOT爱科学.png" group-title="IHOT",iHOT-爱科学
http://${host}/itv/6000000006000160630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱浪漫" tvg-name="IHOT爱浪漫" tvg-logo="https://epg.v1.mk/logo/IHOT爱浪漫.png" group-title="IHOT",iHOT-爱浪漫
http://${host}/itv/6000000006000040630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱历史" tvg-name="IHOT爱历史" tvg-logo="https://epg.v1.mk/logo/IHOT爱历史.png" group-title="IHOT",iHOT-爱历史
http://${host}/itv/6000000006000150630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱旅行" tvg-name="IHOT爱旅行" tvg-logo="https://epg.v1.mk/logo/IHOT爱旅行.png" group-title="IHOT",iHOT-爱旅行
http://${host}/itv/6000000006000250630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱奇谈" tvg-name="IHOT爱奇谈" tvg-logo="https://epg.v1.mk/logo/IHOT爱奇谈.png" group-title="IHOT",iHOT-爱奇谈
http://${host}/itv/6000000006000270630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱青春" tvg-name="IHOT爱青春" tvg-logo="https://epg.v1.mk/logo/IHOT爱青春.png" group-title="IHOT",iHOT-爱青春
http://${host}/itv/6000000006000100630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱赛车" tvg-name="IHOT爱赛车" tvg-logo="https://epg.v1.mk/logo/IHOT爱赛车.png" group-title="IHOT",iHOT-爱赛车
http://${host}/itv/6000000006000240630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱体育" tvg-name="IHOT爱体育" tvg-logo="https://epg.v1.mk/logo/IHOT爱体育.png" group-title="IHOT",iHOT-爱体育
http://${host}/itv/6000000006000290630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱玩具" tvg-name="IHOT爱玩具" tvg-logo="https://epg.v1.mk/logo/IHOT爱玩具.png" group-title="IHOT",iHOT-爱玩具
http://${host}/itv/6000000006000220630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱喜剧" tvg-name="IHOT爱喜剧" tvg-logo="https://epg.v1.mk/logo/IHOT爱喜剧.png" group-title="IHOT",iHOT-爱喜剧
http://${host}/itv/6000000006000010630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱悬疑" tvg-name="IHOT爱悬疑" tvg-logo="https://epg.v1.mk/logo/IHOT爱悬疑.png" group-title="IHOT",iHOT-爱悬疑
http://${host}/itv/6000000006000050630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱幼教" tvg-name="IHOT爱幼教" tvg-logo="https://epg.v1.mk/logo/IHOT爱幼教.png" group-title="IHOT",iHOT-爱幼教
http://${host}/itv/6000000006000180630.m3u8?cdn=wasusyt
#EXTINF:-1,tvg-id="IHOT爱院线" tvg-name="IHOT爱院线" tvg-logo="https://epg.v1.mk/logo/IHOT爱院线.png" group-title="IHOT",iHOT-爱院线
http://${host}/itv/6000000006000030630.m3u8?cdn=wasusyt`
}