// ============================================================================
// 1. DỮ LIỆU CHUẨN DÂN SỐ & DIỆN TÍCH 63 TỈNH THÀNH VIỆT NAM
// ============================================================================
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

// Sử dụng mạng CDN JSDelivr chuyên dụng (hỗ trợ CORS tuyệt đối, không bao giờ bị chặn trên GitHub Pages)
const GEOJSON_SOURCES = [
    'https://cdn.jsdelivr.net/gh/giao-hang-tiet-kiem/vietnam-geojson@master/provinces.json',
    'https://cdn.jsdelivr.net/gh/kenzouno1/VietNam-geojson@master/vietnam.json',
    'https://raw.githubusercontent.com/giao-hang-tiet-kiem/vietnam-geojson/master/provinces.json'
];

// ============================================================================
// 2. KHỞI TẠO KHÔNG GIAN 3D THREE.JS & MÔ TRƯỜNG ÁNH SÁNG
// ============================================================================
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, -38, 38);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2.1;
controls.minDistance = 12;
controls.maxDistance = 85;
controls.target.set(0, 0, 0);

// Hệ thống ánh sáng nhiều góc độ giúp khối 3D rực rỡ, rõ khối
const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
scene.add(ambientLight);

const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight1.position.set(30, -30, 40);
scene.add(dirLight1);

const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.4);
dirLight2.position.set(-30, 30, -10);
scene.add(dirLight2);

const pointLight = new THREE.PointLight(0x00f2fe, 1.2, 100);
pointLight.position.set(0, -10, 30);
scene.add(pointLight);

// ============================================================================
// 3. THUẬT TOÁN DỰNG HÌNH HỌC D3 -> THREE.JS EXTRACTOR
// ============================================================================
const mapGroup = new THREE.Group();
scene.add(mapGroup);

// Phép chiếu Mercator đưa tâm Việt Nam về tọa độ (0, 0, 0) của không gian 3D
const projection = d3.geoMercator()
    .center([106.3, 16.2])
    .scale(2700)
    .translate([0, 0]);

const provincesMeshes = [];
const allProvinceGroups = [];
let selectedProvince = null;
let hoveredProvince = null;

const PALETTE = [0x1e3a8a, 0x0369a1, 0x0e7490, 0x0f766e, 0x1d4ed8, 0x0284c7, 0x047857];

async function loadMapData() {
    let geojson = null;
    let fetchError = null;

    // Cơ chế tự động thử lần lượt các link CDN nếu gặp lỗi mạng
    for (const url of GEOJSON_SOURCES) {
        try {
            const res = await fetch(url);
            if (res.ok) {
                geojson = await res.json();
                break;
            }
        } catch (err) {
            fetchError = err;
            console.warn(`Thử tải link ${url} thất bại, đang thử cổng dự phòng...`);
        }
    }

    // Nếu không tải được toàn bộ (Ví dụ: Mở trực tiếp file:// mà không dùng server)
    if (!geojson) {
        document.querySelector('.spinner').style.display = 'none';
        document.getElementById('loading-text').innerHTML = `
            <div style="background: rgba(244,63,94,0.1); border: 1px solid #f43f5e; padding: 20px; border-radius: 12px; text-align: left;">
                <h3 style="color: #f43f5e; margin-bottom: 10px;">⚠️ Không thể tải dữ liệu bản đồ!</h3>
                <p style="font-size: 0.9rem; margin-bottom: 10px;"><b>Nguyên nhân:</b> Trình duyệt chặn tải dữ liệu do bạn đang nhấp đúp mở trực tiếp file <code>index.html</code> (giao thức file://).</p>
                <p style="font-size: 0.9rem; color: #38bdf8;"><b>👉 Cách khắc phục:</b> Hãy đẩy code lên <b>GitHub Pages</b> hoặc dùng tiện ích <b>Live Server</b> trên VS Code, ứng dụng sẽ hoạt động 100%.</p>
            </div>
        `;
        return;
    }

    // Xử lý dựng hình khối 3D cho từng tỉnh
    geojson.features.forEach((feature, index) => {
        try {
            const provinceGroup = new THREE.Group();
            
            // Nhận diện tên tỉnh từ mọi chuẩn GeoJSON khác nhau
            const rawName = feature.properties.NAME_1 || feature.properties.name || feature.properties.Name || feature.properties.ten_tinh || "Chưa rõ";
            const cleanName = normalizeProvinceName(rawName);
            
            const baseColorHex = PALETTE[index % PALETTE.length];
            const baseColor = new THREE.Color(baseColorHex);
            
            provinceGroup.userData = {
                name: cleanName,
                rawName: rawName,
                data: PROVINCE_DATA[cleanName] || { area: "Đang cập nhật...", pop: "Đang cập nhật...", region: "Việt Nam" },
                baseColor: baseColor,
                targetColor: baseColor.clone(),
                currentColor: baseColor.clone(),
                targetZ: 0
            };

            const material = new THREE.MeshPhongMaterial({
                color: baseColor,
                transparent: true,
                opacity: 0.92,
                side: THREE.DoubleSide,
                shininess: 40
            });

            // Xử lý an toàn đa giác (Polygon và MultiPolygon)
            const coordinates = feature.geometry.type === "MultiPolygon" 
                ? feature.geometry.coordinates 
                : [feature.geometry.coordinates];

            coordinates.forEach(polygon => {
                const shape = new THREE.Shape();
                
                polygon[0].forEach((coord, i) => {
                    const [x, y] = projection(coord);
                    if (isNaN(x) || isNaN(y)) return;
                    if (i === 0) shape.moveTo(x, -y);
                    else shape.lineTo(x, -y);
                });

                const extrudeSettings = {
                    depth: 0.7,
                    bevelEnabled: true,
                    bevelSegments: 2,
                    bevelSteps: 1,
                    bevelThickness: 0.04,
                    bevelSize: 0.04
                };

                const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
                const mesh = new THREE.Mesh(geometry, material);
                mesh.userData = provinceGroup.userData;
                
                // Vẽ đường viền ranh giới sáng màu
                const edges = new THREE.EdgesGeometry(geometry);
                const lineMaterial = new THREE.LineBasicMaterial({ color: 0x7dd3fc, linewidth: 1, opacity: 0.45, transparent: true });
                const line = new THREE.LineSegments(edges, lineMaterial);
                mesh.add(line);

                provinceGroup.add(mesh);
                provincesMeshes.push(mesh);
            });

            mapGroup.add(provinceGroup);
            allProvinceGroups.push(provinceGroup);
        } catch (e) {
            console.warn("Bỏ qua lỗi dựng hình của một tỉnh:", e);
        }
    });

    // Ẩn màn hình loading sau khi hoàn tất
    const loadingEl = document.getElementById('loading');
    loadingEl.style.opacity = 0;
    setTimeout(() => loadingEl.style.display = 'none', 600);
}

function normalizeProvinceName(name) {
    if (!name) return "Chưa rõ";
    return name.replace(/^(Tỉnh|Thành phố|TP\.|TP)\s+/i, '').trim();
}

// ============================================================================
// 4. TƯỢNG TÁC RAYCASTER & XỬ LÝ SỰ KIỆN CLICK / HOVER
// ============================================================================
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
            hoveredProvince.userData.targetColor.setHex(0x38bdf8); // Màu sáng khi di chuột
            document.body.style.cursor = 'pointer';
        }
    } else {
        resetHover();
        document.body.style.cursor = 'default';
    }
});

function resetHover() {
    if (hoveredProvince && hoveredProvince !== selectedProvince) {
        hoveredProvince.userData.targetColor.copy(hoveredProvince.userData.baseColor);
        hoveredProvince = null;
    }
}

window.addEventListener('click', () => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(provincesMeshes);

    if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        const targetGroup = hitMesh.parent;

        // Nếu click lại đúng tỉnh đang chọn -> Bỏ chọn
        if (selectedProvince === targetGroup) {
            deselectCurrentProvince();
            return;
        }

        // Hạ tỉnh cũ xuống
        if (selectedProvince) {
            selectedProvince.userData.targetZ = 0;
            selectedProvince.userData.targetColor.copy(selectedProvince.userData.baseColor);
        }

        // Chọn tỉnh mới: Nổi lên độ cao Z=1.6 và đổi màu hồng cam nổi bật
        selectedProvince = targetGroup;
        selectedProvince.userData.targetZ = 1.6;
        selectedProvince.userData.targetColor.setHex(0xf43f5e);
        
        showInfoPanel(selectedProvince.userData);
    } else {
        deselectCurrentProvince();
    }
});

function deselectCurrentProvince() {
    if (selectedProvince) {
        selectedProvince.userData.targetZ = 0;
        selectedProvince.userData.targetColor.copy(selectedProvince.userData.baseColor);
        selectedProvince = null;
        hideInfoPanel();
    }
}

// ============================================================================
// 5. HIỆN / ẨN BẢNG THÔNG TIN CHI TIẾT
// ============================================================================
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

// ============================================================================
// 6. VÒNG LẶP RENDER & TỰ ĐỘNG CHUYỂN ĐỘNG NỘI TẠI (NATIVE 3D LERP)
// ============================================================================
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();

    // Thuật toán nội suy mượt mà (Lerp) tạo hiệu ứng nổi khối mà không cần GSAP
    for (let i = 0; i < allProvinceGroups.length; i++) {
        const group = allProvinceGroups[i];
        
        // Di chuyển độ cao Z mượt mà
        if (Math.abs(group.position.z - group.userData.targetZ) > 0.001) {
            group.position.z = THREE.MathUtils.lerp(group.position.z, group.userData.targetZ, 0.1);
        }

        // Chuyển đổi màu sắc mượt mà
        if (!group.userData.currentColor.equals(group.userData.targetColor)) {
            group.userData.currentColor.lerp(group.userData.targetColor, 0.1);
            group.children.forEach(mesh => {
                if (mesh.material && mesh.material.color) {
                    mesh.material.color.copy(group.userData.currentColor);
                }
            });
        }
    }

    renderer.render(scene, camera);
}

// Khởi chạy ứng dụng
loadMapData();
animate();
