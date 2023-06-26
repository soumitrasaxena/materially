export const data = [
    {
        name: "mouth_mtl",
        primPath: "/skin_0/Looks/mouth_mtl",
        attributes: {
            "token outputs:moonray:surface.connect": "</skin_0/Looks/mouth_mtl/DwaSkinMaterial1_moonray.outputs:surface>"
        },
        type: "UsdMaterial",
        spec: "Material",
        shaders: [
            {
                name: "DwaSkinMaterial1_moonray",
                type: "DwaSkinMaterial",
                spec: "Shader",
                primPath: "/skin_0/Looks/mouth_mtl/DwaSkinMaterial1_moonray",
                attributes: [
                {
                    key: "uniform token info:id", 
                    value: "DwaSkinMaterial",
                },
                {
                    key: "float3 inputs:albedo.connect",
                    value: "</skin_0/Looks/mouth_mtl/ColorCorrectHsvMap1_moonray.outputs:out>",
                },
                {
                    key: "string inputs:diffuse_transmission_blending_behavior",
                    value: "RGB",
                },
                {
                    key:"bool inputs:enable_sss_input_normal",
                    value: "1"
                },
                {
                    key: "token inputs:input_normal.connect",
                    value: "</skin_0/Looks/mouth_mtl/nml_moonray.outputs:out>",
                },
                {
                    key: "float inputs:refractive_index",
                    value: "1.4"
                },
                {
                    key: "float inputs:roughness",
                    value: "1"
                },
                {
                    key: "float inputs:roughness.connect",
                    value: "</skin_0/Looks/mouth_mtl/rgh_moonray.outputs:out>",
                },
                {
                    key: "color3f inputs:scattering_color",
                    value: "[1, 0.28399998, 0.28399998]",
                },
                {
                    key: "float inputs:scattering_radius", 
                    value: "0.5",
                },
                {
                    key: "string inputs:specular_model",
                    value: "GGX",
                },
                {
                    key: "token outputs:surface",
                    value: null
                },
                {
                    key: "uniform float2 ui:nodegraph:node:pos",
                    value: "(6.55941, 0.809715)"
                }
                ],
                coord: {
                x: 600,
                y: 100
                }
            },
            {
                name: "msk_skin_ss_radius_moonray",
                type: "ImageMap",
                spec: "Shader",
                primPath: "/skin_0/Looks/mouth_mtl/msk_skin_ss_radius_moonray",
                coord: {
                    x: 200,
                    y: 400
                },
                attributes: [
                    {
                        key: "uniform token info:id",
                        value: "ImageMap"
                    },
                    {
                        key: "string inputs:gamma",
                        value: "off"
                    },
                    {
                        key: "asset inputs:texture",
                        value: "@${a_lib_mtl_dir}/char/wolf/skin_0/default/textures/msk_skin_ss_radius/msk_skin_ss_radius.<UDIM>.tx@"
                    },
                    {
                        key: "int inputs:udim_max_v",
                        value: "20"
                    },
                    {
                        key: "uniform float2 ui:nodegraph:node:pos",
                        value: "(-3.44806, 1.30472)"
                    }
                ]
            },
            {
                name: "nml_moonray",
                type: "ImageNormalMap",
                spec: "Shader",
                primPath: "/skin_0/Looks/mouth_mtl/nml_moonray",
                coord: {
                    x: 400,
                    y: 250
                },
                attributes: [
                    {
                        key: "uniform token info:id",
                        value: "ImageNormalMap"
                    },
                    {
                        key: "asset inputs:tangent_space_normal_texture",
                        value: "@${a_lib_mtl_dir}/char/wolf/skin_0/default/textures/nml/nml.<UDIM>.tx@"
                    },
                    {
                        key: "inputs:udim_max_v",
                        value: "20"
                    },
                    {
                        key: "token outputs:out",
                        value: null
                    },
                    {
                        key: "uniform float2 ui:nodegraph:node:pos",
                        value: "(-1.97878, 3.33269)"
                    }
                ]
            },
            {
                name: "ColorCorrectHsvMap1_moonray",
                type: "ColorCorrectHsvMap",
                spec: "Shader",
                primPath: "/skin_0/Looks/mouth_mtl/ColorCorrectHsvMap1_moonray",
                coord: {
                    x: 400,
                    y: 150
                },
                attributes: [
                    {
                        key: "uniform token info:id",
                        value: "ColorCorrectHsvMap"
                    },
                    {
                        key: "float3 inputs:input.connect",
                        value: "</skin_0/Looks/mouth_mtl/clr_moonray.outputs:out>"
                    },
                    {
                        key: "token outputs:out",
                        value: null
                    },
                    {
                        key: "uniform float2 ui:nodegraph:node:pos",
                        value: "(0.823854, -0.91829)"
                    }
                ]
            },
            {
                name: "rgh_moonray",
                type: "ImageMap",
                spec: "Shader",
                primPath: "/skin_0/Looks/mouth_mtl/rgh_moonray",
                coord: {
                    x: 400,
                    y: 400
                },
                attributes: [
                    {
                        key: "uniform token info:id",
                        value: "ImageMap"
                    },
                    {
                        key: "asset inputs:texture",
                        value: "@${a_lib_mtl_dir}/char/wolf/skin_0/default/textures/rgh/rgh.<UDIM>.tx@"
                    },
                    {
                        key: "inputs:udim_max_v",
                        value: "20"
                    },
                    {
                        key: "token outputs:out",
                        value: "20"
                    },
                    {
                        key: "uniform float2 ui:nodegraph:node:pos",
                        value: "(-2.87662, -0.382062)"
                    }
                ]
            },
            {
                name: "clr_moonray",
                type: "ImageMap",
                spec: "Shader",
                primPath: "/skin_0/Looks/mouth_mtl/clr_moonray",
                coord: {
                    x: 400,
                    y: 500
                },
                attributes: [
                    {
                        key: "uniform token info:id",
                        value: "ImageMap"
                    },
                    {
                        key: "asset inputs:texture",
                        value: "@${a_lib_mtl_dir}/char/wolf/skin_0/default/textures/clr/clr.<UDIM>.tx@"
                    },
                    {
                        key: "inputs:udim_max_v",
                        value: "20"
                    },
                    {
                        key: "token outputs:out",
                        value: null
                    },
                    {
                        key: "uniform float2 ui:nodegraph:node:pos",
                        value: "(-2.1047, -2.55511)"
                    }
                ]
            }
        ],
        coord: {
            x: 100,
            y: 100
        }
    }
]