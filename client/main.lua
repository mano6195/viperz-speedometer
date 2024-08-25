local esVisible = false

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1000) 

        local playerPed = PlayerPedId()
        local vehicle = GetVehiclePedIsIn(playerPed, false)

        if vehicle ~= 0 and not esVisible then
            esVisible = true
            SendNUIMessage({
                action = 'toggleSpeedo',
                show = true
            })
        elseif vehicle == 0 and esVisible then
            esVisible = false
            SendNUIMessage({
                action = 'toggleSpeedo',
                show = false
            })
        end
    end
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(100)

        local playerPed = PlayerPedId()
        local vehicle = GetVehiclePedIsIn(playerPed, false)

        if vehicle ~= 0 then
            local speed = GetEntitySpeed(vehicle) * 3.6 
            local rpm = GetVehicleCurrentRpm(vehicle) * 10000
            local fuel = GetVehicleFuelLevel(vehicle)

            SendNUIMessage({
                action = 'updateSpeedo',
                speed = math.ceil(speed),
                rpm = rpm,
                fuel = fuel
            })
        end
    end
end)
