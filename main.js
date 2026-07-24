// ==========================================
// 1. DỮ LIỆU DÂN SỐ & DIỆN TÍCH 63 TỈNH THÀNH
// ==========================================
const PROVINCE_DATA = {
    "Hà Nội": { area: "3.359 km²", pop: "8.435.700 người", region: "Đồng bằng sông Hồng" },
    "TP. Hồ Chí Minh": { area: "2.095 km²", pop: "9.389.700 người", region: "Đông Nam Bộ" },
    "Hồ Chí Minh": { area: "2.095 km²", pop: "9.389.700 người", region: "Đông Nam Bộ" },
    "Hải Phòng": { area: "1.562 km²", pop: "2.088.000 người", region: "Đồng bằng sông Hồng" },
    "Đà Nẵng": { area: "1.285 km²", pop: "1.220.200 người", region: "Duyên hải Nam Trung Bộ" },
    "Cần Thơ": { area: "1.439 km²", pop: "1.252.300 người", region: "Đồng bằng sông Cửu Long" },
    "An Giang": { area: "3.537 km²", pop: "1.908.300 người", region: "Đồng bằng sông Cửu Long" },
    "Bà Rịa - Vũng Tàu": { area: "1.980 km²", pop: "1.181.300 người", region: "Đông Nam Bộ" },
    "Bắc Giang": { area: "3.895 km²", pop: "1.890.900 người", region: "Trung du & miền núi phía Bắc" },
    "Bắc Kạn": { area: "4.860 km²", pop: "323.700 người", region: "Trung du & miền núi phía Bắc" },
    "Bạc Liêu": { area: "2.669 km²", pop: "918.500 người", region: "Đồng bằng sông Cửu Long" },
    "Bắc Ninh": { area: "823 km²", pop: "1.488.200 người", region: "Đồng bằng sông Hồng" },
    "Bến Tre": { area: "2.395 km²", pop: "1.298.000 người", region: "Đồng bằng sông Cửu Long" },
    "Bình Định": { area: "6.066 km²", pop: "1.504.300 người", region: "Duyên hải Nam Trung Bộ" },
    "Bình Dương": { area: "2.694 km²", pop: "2.685.500 người", region: "Đông Nam Bộ" },
    "Bình Phước": { area: "6.873 km²", pop: "1.034.600 người", region: "Đông Nam Bộ" },
    "Bình Thuận": { area: "7.944 km²", pop: "1.252.100 người", region: "Duyên hải Nam Trung Bộ" },
    "Cà Mau": { area: "5.221 km²", pop: "1.206.600 người", region: "Đồng bằng sông Cửu Long" },
    "Cao Bằng": { area: "6.700 km²", pop: "543.100 người", region: "Trung du & miền núi phía Bắc" },
    "Đắk Lắk": { area: "13.030 km²", pop: "1.918.400 người", region: "Tây Nguyên" },
    "Đắk Nông": { area: "6.516 km²", pop: "670.600 người", region: "Tây Nguyên" },
    "Điện Biên": { area: "9.541 km²", pop: "635.900 người", region: "Trung du & miền núi phía Bắc" },
    "Đồng Nai": { area: "5.863 km²", pop: "3.255.800 người", region: "Đông Nam Bộ" },
    "Đồng Tháp": { area: "3.384 km²", pop: "1.600.200 người", region: "Đồng bằng sông Cửu Long" },
    "Gia Lai": { area: "15.511 km²", pop: "1.590.900 người", region: "Tây Nguyên" },
    "Hà Giang": { area: "7.929 km²", pop: "892.700 người", region: "Trung du & miền núi phía Bắc" },
    "Hà Nam": { area: "861 km²", pop: "878.000 người", region: "Đồng bằng sông Hồng" },
    "Hà Tĩnh": { area: "5.994 km²", pop: "1.301.600 người", region: "Bắc Trung Bộ" },
    "Hải Dương": { area: "1.668 km²", pop: "1.936.800 người", region: "Đồng bằng sông Hồng" },
    "Hậu Giang": { area: "1.622 km²", pop: "729.500 người", region: "Đồng bằng sông Cửu Long" },
    "Hòa Bình": { area: "4.590 km²", pop: "875.400 người", region: "Trung du & miền núi phía Bắc" },
    "Hưng Yên": { area: "930 km²", pop: "1.284.600 người", region: "Đồng bằng sông Hồng" },
    "Khánh Hòa": { area: "5.197 km²", pop: "1.254.000 người", region: "Duyên hải Nam Trung Bộ" },
    "Kiên Giang": { area: "6.349 km²", pop: "1.751.700 người", region: "Đồng bằng sông Cửu Long" },
    "Kon Tum": { area: "9.674 km²", pop: "578.800 người", region: "Tây Nguyên" },
    "Lai Châu": { area: "9.069 km²", pop: "489.300 người", region: "Trung du & miền núi phía Bắc" },
    "Lâm Đồng": { area: "9.783 km²", pop: "1.332.000 người", region: "Tây Nguyên" },
    "Lạng Sơn": { area: "8.310 km²", pop: "802.100 người", region: "Trung du & miền núi phía Bắc" },
    "Lào Cai": { area: "6.364 km²", pop: "756.100 người", region: "Trung du & miền núi phía Bắc" },
    "Long An": { area: "4.495 km²", pop: "1.734.300 người", region: "Đồng bằng sông Cửu Long" },
    "Nam Định": { area: "1.669 km²", pop: "1.800.000 người", region: "Đồng bằng sông Hồng" },
    "Nghệ An": { area: "16.486 km²", pop: "3.417.800 người", region: "Bắc Trung Bộ" },
    "Ninh Bình": { area: "1.387 km²", pop: "1.000.000 người", region: "Đồng bằng sông Hồng" },
    "Ninh Thuận": { area: "3.355 km²", pop: "598.700 người", region: "Duyên hải Nam Trung Bộ" },
    "Phú Thọ": { area: "3.535 km²", pop: "1.506.600 người", region: "Trung du & miền núi phía Bắc" },
    "Phú Yên": { area: "5.025 km²", pop: "876.600 người", region: "Duyên hải Nam Trung Bộ" },
    "Quảng Bình": { area: "8.065 km²", pop: "913.000 người", region: "Bắc Trung Bộ" },
    "Quảng Nam": { area: "10.574 km²", pop: "1.511.400 người", region: "Duyên hải Nam Trung Bộ" },
    "Quảng Ngãi": { area: "5.155 km²", pop: "1.245.600 người", region: "Duyên hải Nam Trung Bộ" },
    "Quảng Ninh": { area: "6.178 km²", pop: "1.362.900 người", region: "Trung du & miền núi phía Bắc" },
    "Quảng Trị": { area: "4.737 km²", pop: "650.300 người", region: "Bắc Trung Bộ" },
    "Sóc Trăng": { area: "3.311 km²", pop: "1.206.800 người", region: "Đồng bằng sông Cửu Long" },
    "Sơn La": { area: "14.123 km²", pop: "1.300.100 người", region: "Trung du & miền núi phía Bắc" },
    "Tây Ninh": { area: "4.041 km²", pop: "1.188.800 người", region: "Đông Nam Bộ" },
    "Thái Bình": { area: "1.586 km²", pop: "1.878.500 người", region: "Đồng bằng sông Hồng" },
    "Thái Nguyên": { area: "3.521 km²", pop: "1.336.000 người", region: "Trung du & miền núi phía Bắc" },
    "Thanh Hóa": { area: "11.111 km²", pop: "3.722.100 người", region: "Bắc Trung Bộ" },
    "Thừa Thiên Huế": { area: "4.947 km²", pop: "1.160.200 người", region: "Bắc Trung Bộ" },
    "Tiền Giang": { area: "2.510 km²", pop: "1.792.000 người", region: "Đồng bằng sông Cửu Long" },
    "Trà Vinh": { area: "2.358 km²", pop: "1.019.300 người", region: "Đồng bằng sông Cửu Long" },
    "Tuyên Quang": { area: "5.867 km²", pop: "801.700 người", region: "Trung du & miền núi phía Bắc" },
    "Vĩnh Long": { area: "1.525 km²", pop: "1.022.800 người", region: "Đồng bằng sông Cửu Long" },
    "Vĩnh Phúc": { area: "1.236 km²", pop: "1.191.800 người", region: "Đồng bằng sông Hồng" },
    "Yên Bái": { area: "6.887 km²", pop: "842.700 người", region: "Trung du & miền núi phía Bắc" }
};

// Sử dụng link GeoJSON siêu ổn định và có link dự phòng (Fallback)
const PRIMARY_GEOJSON_URL = 'https://raw.githubusercontent.com/kenzouno1/VietNam-geojson/master/vietnam.json';
const BACKUP_GEOJSON_URL = 'https://raw.githubusercontent.com/giao-hang-tiet-kiem/vietnam-geojson/master/provinces.json';

// ==========================================
// 2. KHỞI TẠO KHÔNG GIAN THREE.JS 3D
// ==========================================
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, -35, 35);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2.1;
controls.minDistance = 10;
controls.maxDistance = 80;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(20, -20, 30);
scene.add(dirLight);

const pointLight = new THREE.PointLight(0x00f2fe, 1, 100);
pointLight.position.set(0, 0, 30);
scene.add(pointLight);

// ==========================================
// 3. XỬ LÝ HÌNH HỌC D3 & TẠO MAP 3D
// ==========================================
const mapGroup = new THREE.Group();
scene.add(mapGroup);

const projection = d3.geoMercator()
    .center([106.3, 16.2])
    .scale(2600)
    .translate([0, 0]);

const provincesMeshes = [];
let selectedProvince = null;
let hoveredProvince = null;

const PALETTE = [0x1e3a8a, 0x0369a1, 0x0e7490, 0x0f766e, 0x1d4ed8, 0x0284c7];

async function loadMapData() {
    let geojson = null;
    try {
        // Thử tải từ link số 1
        const res = await fetch(PRIMARY_GEOJSON_URL);
        if (!res.ok) throw new Error("Link số 1 lỗi");
        geojson = await res.json();
    } catch (e) {
        console.warn("Đang chuyển sang link dự phòng...", e);
        try {
            // Nếu lỗi, chuyển sang link dự phòng số 2
            const resBackup = await fetch(BACKUP_GEOJSON_URL);
            geojson = await resBackup.json();
        } catch (err) {
            // Nếu cả 2 link cùng lỗi hoặc mở trực tiếp file://
            console.error("Lỗi tải bản đồ:", err);
            const loadingText = document.querySelector('#loading p');
            const spinner = document.querySelector('.spinner');
            if (spinner) spinner.style.display = 'none';
            if (loadingText) {
                loadingText.innerHTML = `
                    <span style="color: #f43f5e; font-size: 1.1rem; font-weight: bold;">⚠️ KHÔNG THỂ TẢI DỮ LIỆU BẢN ĐỒ!</span><br><br>
                    <div style="text-align: left; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; font-size: 0.9rem; line-height: 1.5; max-width: 450px;">
                        <b>Nguyên nhân 90% bạn gặp phải:</b> Bạn đang nhấp đúp mở trực tiếp file <code>index.html</code>.<br><br>
                        <b>👉 Cách sửa để chạy được:</b><br>
                        1. Đẩy 4 file lên <b>GitHub Pages</b> ứng dụng sẽ tự chạy 100%.<br>
                        2. Hoặc mở bằng <b>Live Server</b> trong phần mềm Visual Studio Code.<br>
                        <hr style="border-color: rgba(255,255,255,0.1); margin: 10px 0;">
                        <small style="color: #94a3b8;">Mã lỗi hệ thống: Lỗi CORS hoặc mất kết nối Internet (${err.message})</small>
                    </div>
                `;
            }
            return;
        }
    }

    // Tiến hành vẽ bản đồ sau khi tải thành công
    geojson.features.forEach((feature, index) => {
        const provinceGroup = new THREE.Group();
        // Bắt mọi định dạng tên trường từ các nguồn GeoJSON khác nhau
        const rawName = feature.properties.NAME_1 || feature.properties.name || feature.properties.Name || feature.properties.ten_tinh || "Chưa rõ";
        const cleanName = normalizeProvinceName(rawName);
        
        provinceGroup.userData = {
            name: cleanName,
            rawName: rawName,
            data: PROVINCE_DATA[cleanName] || { area: "Đang cập nhật...", pop: "Đang cập nhật...", region: "Việt Nam" }
        };

        const color = PALETTE[index % PALETTE.length];
        const material = new THREE.MeshPhongMaterial({
            color: color,
            transparent: true,
            opacity: 0.9,
            side: THREE.DoubleSide
        });

        const coordinates = feature.geometry.type === "MultiPolygon" 
            ? feature.geometry.coordinates 
            : [feature.geometry.coordinates];

        coordinates.forEach(polygon => {
            const shape = new THREE.Shape();
            
            polygon[0].forEach((coord, i) => {
                const [x, y] = projection(coord);
                if (i === 0) shape.moveTo(x, -y);
                else shape.lineTo(x, -y);
            });

            const extrudeSettings = {
                depth: 0.8,
                bevelEnabled: true,
                bevelSegments: 1,
                bevelSteps: 1,
                bevelThickness: 0.05,
                bevelSize: 0.05
            };

            const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
            const mesh = new THREE.Mesh(geometry, material);
            mesh.userData = provinceGroup.userData;
            
            const edges = new THREE.EdgesGeometry(geometry);
            const lineMaterial = new THREE.LineBasicMaterial({ color: 0x38bdf8, linewidth: 1, opacity: 0.4, transparent: true });
            const line = new THREE.LineSegments(edges, lineMaterial);
            mesh.add(line);

            provinceGroup.add(mesh);
            provincesMeshes.push(mesh);
        });

        provinceGroup.userData.baseColor = color;
        mapGroup.add(provinceGroup);
    });

    // Ẩn màn hình loading
    document.getElementById('loading').style.opacity = 0;
    setTimeout(() => document.getElementById('loading').style.display = 'none', 500);
}

function normalizeProvinceName(name) {
    if (!name) return "Chưa rõ";
    return name.replace(/^(Tỉnh|Thành phố|TP\.|TP)\s+/i, '').trim();
}

// ==========================================
// 4. TƯỢNG TÁC CHUỘT (RAYCASTER & CLICK EVENT)
// ==========================================
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(provincesMeshes);

    if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        const parentGroup = hitMesh.parent;

        if (hoveredProvince !== parentGroup && selectedProvince !== parentGroup) {
            resetHover();
            hoveredProvince = parentGroup;
            setGroupColor(hoveredProvince, 0x38bdf8);
            document.body.style.cursor = 'pointer';
        }
    } else {
        resetHover();
        document.body.style.cursor = 'default';
    }
});

function resetHover() {
    if (hoveredProvince && hoveredProvince !== selectedProvince) {
        setGroupColor(hoveredProvince, hoveredProvince.userData.baseColor);
        hoveredProvince = null;
    }
}

function setGroupColor(group, hexColor) {
    group.children.forEach(mesh => {
        mesh.material.color.setHex(hexColor);
    });
}

window.addEventListener('click', () => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(provincesMeshes);

    if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        const targetGroup = hitMesh.parent;

        if (selectedProvince === targetGroup) {
            deselectCurrentProvince();
            return;
        }

        if (selectedProvince) {
            animateElevation(selectedProvince, 0, selectedProvince.userData.baseColor);
        }

        selectedProvince = targetGroup;
        animateElevation(selectedProvince, 1.5, 0xf43f5e);
        showInfoPanel(selectedProvince.userData);

    } else {
        deselectCurrentProvince();
    }
});

function deselectCurrentProvince() {
    if (selectedProvince) {
        animateElevation(selectedProvince, 0, selectedProvince.userData.baseColor);
        selectedProvince = null;
        hideInfoPanel();
    }
}

function animateElevation(group, targetZ, targetColorHex) {
    setGroupColor(group, targetColorHex);
    gsap.to(group.position, {
        z: targetZ,
        duration: 0.6,
        ease: "power3.out"
    });
}

// ==========================================
// 5. HIỆN / ẨN BẢNG THÔNG TIN CHI TIẾT
// ==========================================
const infoPanel = document.getElementById('info-panel');
const closeBtn = document.getElementById('close-btn');

function showInfoPanel(data) {
    document.getElementById('province-name').innerText = data.name;
    document.getElementById('province-pop').innerText = data.data.pop;
    document.getElementById('province-area').innerText = data.data.area;
    document.getElementById('province-region').innerText = data.data.region;
    
    infoPanel.classList.remove('hidden');
}

function hideInfoPanel() {
    infoPanel.classList.add('hidden');
}

closeBtn.addEventListener('click', deselectCurrentProvince);

// ==========================================
// 6. VÒNG LẶP RENDER & RESIZE MÀN HÌNH
// ==========================================
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

loadMapData();
animate();