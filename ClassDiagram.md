```mermaid
classDiagram

    %% MAIN SERVICES
    class CommonApiService{
        <<Service>>
        +GetRegistryModificationAsync() Task~RegistryModification~
        +GetLatestVersionAsync() Task~list~RepoVersion~~
    }

    %%Registry
    class RegistryOperation{
        <<Static Service>>
        + getValue(RegistryItem)$ object
        + getValueNullable(RegistryItem)$ object?
        + getValueNullableReturnString(RegistryItem)$ string?
        + addEditValue(RegistryItemValue)$
        + existValue(RegistryItem )$ bool
        + deleteSubKeyOrValue(RegistryItem)$ bool
    }

    class RegistryItem{
        -RegistryKey currentUserBaseKey
        +string subKey
        +string? value
        +registryItem(subKeyStrings:string[] , valueName:string? )RegistryItem
        +createSubKey(string[],string "SOFTWARE",string "auxalia")string
        +getRegistryKey()RegistryKey
        +isValid()string
    }

    class ProductRegistry{
        <<Abstract>>
        +string[] SubKey
        +getRegistryValue(ModuleType, ModuleVersion, ValueNameType) string
        #getModuleRegistryItem(ModuleType, ModuleVersion, ValueNameType) RegistryItem
        #createSubKey() string[]
        #modulePathValueNameFinder(ModuleType, ModuleVersion) string?
        #moduleVersionValueNameFinder(ModuleType, ModuleVersion) string?
        #createModuleTitle(ModuleType, ModuleVersion) string?
        #setModuleRepoName(ModuleType, ModuleVersion) string?
    }
    class AuxaliaCoreRegistry{    }
    class OpeningsTransferRegistry{    }
    class ParameterToolRegistry{    }
    class ProjectBoxRegistry{    }

    ProductRegistry ..> ModuleType
    ProductRegistry ..> ModuleVersion
    ProductRegistry ..> ValueNameType
    AuxaliaCoreRegistry --|> ProductRegistry
    OpeningsTransferRegistry --|> ProductRegistry
    ParameterToolRegistry --|> ProductRegistry
    ProjectBoxRegistry --|> ProductRegistry

    class ProductModule{
        +string RepositoryName
        +string Title
        +string CurrentVersion
        +string RepositoryName
        +ModuleType ModuleType
        +ModuleVersion ModuleVersion
        +string? PathOrDirectory
        +ReleaseModel LastNormalVersion
        +ReleaseModel LastForceVersion
        +ReleaseModel LastPrereleaseVersion
        +bool HasUpdate
        +SetVersionsFromDto(DTO.RepoVersion)
        +SetHasUpdate()bool
    }

    class ReleaseModel{
        +int Id
        +string TagName
        +string Title
        +string Description
        +DateTime CreatedAt
        +bool Prerelease
        +bool IsForce
        +UpdateType UpdateType
    }

    ProductModule ..> ModuleType
    ProductModule ..> ModuleVersion
    ReleaseModel ..> UpdateType
    ProductModule --o ReleaseModel
    ProductModule --o ReleaseModel
    ProductModule --o ReleaseModel


    class AuxaliaProduct{
        +ProductType ProductType
        +ModuleVersion Version
        +List~ProductModule~ ProductModules
    }

    AuxaliaProduct --* "1 .. *" ProductModule

    class ProductCollection {
        <<Abstract>>
        +ProductType ProductType
        +List~Product~ Products
        +string MissingModules
        #getCollection()List~AuxaliaProduct~
        #productVersionSpecificChanges()
        #productModuleValidation()bool
        #getModules()List~ProductModule~
        +refreshModules()
    }
    class ProjectBoxCollection{  }
    class CoreCollection{  }
    class ParameterToolCollection{  }
    class OpeningsTransferCollection{  }

    class ProductManagerService{
        <<Service>>
        +List~AuxaliaProduct~ ProjectBoxCollection
        +List~AuxaliaProduct~ CoreCollection
        +List~AuxaliaProduct~ ParameterToolCollection
        +List~AuxaliaProduct~ OpeningsTransferCollection
        +onInit()
        +reloadCollections()
        #setLatestVersionsOfModules(List~AuxaliaProduct~) 
    }
    ProductCollection --* AuxaliaProduct
    ProjectBoxCollection --|> ProductCollection
    CoreCollection --|> ProductCollection
    ParameterToolCollection --|> ProductCollection
    OpeningsTransferCollection --|> ProductCollection
    ProductManagerService --o ProjectBoxCollection
    ProductManagerService --o CoreCollection
    ProductManagerService --o ParameterToolCollection
    ProductManagerService --o OpeningsTransferCollection
    ProductCollection ..> ProductRegistry
    ProductRegistry ..> RegistryOperation
    RegistryOperation ..> RegistryItem
    ProductManagerService ..> CommonApiService
    ProductManagerService -"  "-o RepoVersion
    class RepoVersion{
        <<DTO>>
        +string Module
        +Release LastNormalVersion
        +Release LastForceVersion
        +Release LastPrereleaseVersion
    }
    class Release{
        <<DTO>>
        +int Id
        +string TagName
        +string Title
        +string Description
        +DateTime CreatedAt
        +bool Prerelease
        +bool IsForce
    }

    RepoVersion --*  Release
    RepoVersion --*  Release
    RepoVersion --*  Release

        class ModuleType{
        <<Enumeration>>
        AddIn
        Application
        Content
        DynamoScript
        Setting
        SoftwareLicense
        Undefined
        UserManual
    }
    class ModuleVersion{
        <<Enumeration>>
        Undefined
        Version2020
        Version2021
        Version2022
        Version2023
        Version2024
        Version2025
        Version2026
        Version2027
    }
    class ValueNameType{
        <<Enumeration>>
        Path
        Version
    }
    class UpdateType{
        <<Enumeration>>
        Normal
        Force
        PreRelease
        PreReleaseAndForce
    }
```
